from . import views
from django.urls import path




urlpatterns = [
    path('get_all_comments/', views.get_all_comments),
    path('get_all_sighting/', views.get_all_sighting),
    path('comment/', views.user_comment_prop),
    path('locations_all/', views.get_all_locations),
    path('replies/', views.user_replies),
    path('sighting/', views.user_sighting),
    path('feast/', views.feast),
    path('get_all_feast/', views.get_all_feast)
]