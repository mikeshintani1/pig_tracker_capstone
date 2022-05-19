from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from .models import User
from .serializer import UserSerializer
from user_type.models import User_Type
# Create your views here.

@api_view(['GET','POST'])
def user_list(request):
    user = User.objects.all()
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
            user = User.objects.filter(user_type=user_type)
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
def user_detail(request, pk):
    user = get_object_or_404(User, pk=pk)
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