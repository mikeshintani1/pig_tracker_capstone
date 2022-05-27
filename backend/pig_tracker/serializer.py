from rest_framework import serializers
from .models import Sighting, PigUser, Comment, Reply


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = PigUser
        fields = ['id', 'username', 'usertype']
        depth = 1

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields= ['id', 'name', 'location', 'text']
        depth = 1
        

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields= ['id', 'user', 'reply', 'text']

class SightingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sighting
        fields = ['id', 'user', 'sighting_id', 'location', 'time', 'date', 'text']