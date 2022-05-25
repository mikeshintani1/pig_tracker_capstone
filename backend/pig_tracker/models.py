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
    location=models.CharField(max_length=300)
    text = models.CharField(max_length=300)


class Reply(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reply = models.ForeignKey(Comment, blank=True, null=True, on_delete=models.CASCADE)
    text = models.CharField(max_length=300)

class Sighting(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sighting_id = models.CharField(max_length=250)
    location = models.CharField(max_length=255)
    time = models.DateTimeField()
    text = models.CharField(max_length=300)
