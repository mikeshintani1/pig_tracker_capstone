from rest_framework import serializers
from .models import Sighting, User, Comment, Reply


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'usertype']
        depth = 1

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields= ['id', 'user', 'comment_id', 'text']
        depth = 2
        

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields= ['id', 'user', 'reply', 'text']

class SightingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sighting
        fields = ['id', 'user', 'sighting_id', 'location', 'time', 'date', 'text']