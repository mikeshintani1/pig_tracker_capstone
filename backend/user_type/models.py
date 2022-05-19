from operator import mod
from django.db import models

# Create your models here.

class User_Type(models.Model):
    type = models.CharField(max_length=255)