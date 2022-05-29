from . import views
from django.urls import path




urlpatterns = [
    path('get_all_comments/', views.get_all_comments),
    path('get_all_sighting/', views.get_all_sighting),
    path('comment/', views.user_comment_prop),
    path('replies_all/', views.get_all_replies),
    path('replies/', views.user_replies),
    path('user/<int:pk>', views.user_list),
    path('<int:pk>/user_detail', views.user_detail),
    path('sighting/', views.user_sighting),
    path('feast/', views.feast),
    path('get_all_feast/', views.get_all_feast)
]