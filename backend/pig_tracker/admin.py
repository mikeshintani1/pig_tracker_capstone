from django.contrib import admin
from .models import Comment, Reply, Sighting, PigUser


# Register your models here.
admin.site.register(Comment)
admin.site.register(Reply)
admin.site.register(PigUser)
admin.site.register(Sighting)