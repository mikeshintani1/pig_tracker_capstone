from . import views
from django.urls import path




urlpatterns = [
    path('', views.get_all_comments),
    path('<int:pk>/', views.user_comment_prop),
    path('replies/<int:pk>/', views.get_all_replies),
    path('<int:pk>/replies/', views.user_replies),
    path('', views.user_list),
    path('', views.user_detail),
    path('', views.user_sighting)
]