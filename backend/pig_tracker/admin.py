from django.contrib import admin
from .models import Comment, Reply, User


# Register your models here.
admin.site.register(Comment)
admin.site.register(Reply)
admin.site.register(User)