from rest_framework import serializers
from .models import User, Comment, Reply


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'usertype']
        depth = 1

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields= ['id', 'user', 'spotting_id', 'text']
        depth = 2
        

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields= ['id', 'user', 'comment', 'text']