from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from .models import Sighting, PigUser
from .serializer import UserSerializer
from .models import Comment
from .models import Reply
from .models import Sighting
from .serializer import CommentSerializer
from .serializer import ReplySerializer
from .serializer import SightingSerializer
from user_type.models import User_Type
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
# Create your views here.


# ADMIN VIEW TO TRACK USERS
@api_view(['GET','POST'])

def user_list(request):
    user = PigUser.objects.all()
    user_type_param = request.query_params.get('type')
    sort_param = request.query_params.get('sort')
    custom_response_dictionary = {}
    if user_type_param:
        user = user.filter(user_type__type = user_type_param)
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif sort_param:
        user = user.order_by(sort_param)
        serializer = UserSerializer(user, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.model == 'GET':
        user_type = User_Type.objects.all()
        
        for user_type in user_type:
            user = PigUser.objects.filter(user_type=user_type)
            user_serialzer = UserSerializer(user, many=True)
            custom_response_dictionary[user_type.type] = {
                "types": user_type.type,
                "user": user_serialzer.data
            }
        return Response(custom_response_dictionary)

    if request.method == 'POST':
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
    return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def user_detail(request, pk):
    user = get_object_or_404(PigUser, pk=pk)
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == 'DELETE':
        user.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


#allow users to view/create comments and create replies
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    comments = Comment.objects.all()
    serializer = CommentSerializer(comments, many=True)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_comment_prop(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_replies(request):
    print(
    'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = ReplySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_all_replies(request, pk):

    reply = Reply.objects.filter(comment_id=pk)
    serializer = ReplySerializer(reply, many=True)
    return Response(serializer.data)


@api_view(['GET', 'PUT', 'POST'])
@permission_classes([IsAuthenticated])
def user_sighting(request):
    print(
        'User ', f"{request.user.id} {request.user.email} {request.user.username}")
    if request.method == 'POST':
        serializer = SightingSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    if request.method == 'GET':
        sighting = Sighting.objects.filter(sighting_id=request.Sighting.id)
        serializer = SightingSerializer(sighting, many=True)
        return Response(serializer.data)