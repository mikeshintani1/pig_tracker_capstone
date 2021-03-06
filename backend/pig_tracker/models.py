from tkinter import CASCADE
from unicodedata import name
from unittest.util import _MAX_LENGTH
from django.db import models
from user_type.models import User_Type
from authentication.models import User

# Create your models here.
class PigUser(models.Model):
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    user_type = models.ForeignKey(User_Type, on_delete=models.CASCADE)

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name= models.CharField(max_length=300)
    location=models.CharField(max_length=300)
    text = models.CharField(max_length=300)


class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reply = models.ForeignKey(Comment, blank=True, null=True, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)

class Sighting(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=300)
    category = models.CharField(max_length=300)
    sighting_id = models.CharField(max_length=250)
    location = models.CharField(max_length=255)
    date=models.CharField(max_length=255)
    time = models.CharField(max_length=255)
    text = models.CharField(max_length=300)

class Feast(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=500)
    date = models.CharField(max_length=300)
    address = models.CharField(max_length=400)
    time = models.CharField(max_length=300)
    info = models.CharField(max_length=500)