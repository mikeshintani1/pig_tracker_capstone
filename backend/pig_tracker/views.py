from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from .models import Sighting, PigUser, Feast
from .serializer import UserSerializer
from .models import Comment
from .models import Reply
from .models import Sighting
from .serializer import CommentSerializer
from .serializer import ReplySerializer
from .serializer import SightingSerializer
from .serializer import FeastSerializer
from user_type.models import User_Type
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
# Create your views here.


# ADMIN VIEW TO TRACK USERS


#allow users to view/create comments and create replies
@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request):
    if request.method == 'GET':
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
def user_sighting(request):
    if request.method == 'POST':
        serializer = SightingSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_sighting(request):
    if request.method == 'GET':
        sightings = Sighting.objects.all()
        serializer = SightingSerializer(sightings, many=True)
        return Response(serializer.data)

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_feast(request):
    if request.method == 'GET':
        feast = Feast.objects.all()
        serializer = FeastSerializer(feast, many=True)
        return Response(serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_locations(request):
    sighting_loc = get_object_or_404(Sighting,pk=pk)
    if request.method == 'GET':
        sighting_loc = Sighting.objects.filter(sighting_location = sighting_loc.location)
        serializer = SightingSerializer(sighting_loc, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_replies(request):
    if request.method == "POST":
        serializer = ReplySerializer(data = request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data,status.HTTP_201_CREATED)
        

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def feast(request):
    if request.method == 'POST':
        serializer = FeastSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
