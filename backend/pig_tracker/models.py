from django.db import models
from user_type.models import User_Type

# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=255)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    user_type = models.ForeignKey(User_Type, on_delete=models.CASCADE)
