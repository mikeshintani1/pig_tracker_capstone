from . import views
from django.urls import path




urlpatterns = [
    path('', views.get_all_comments),
    path('comment/', views.user_comment_prop),
    path('replies_all/', views.get_all_replies),
    path('replies/', views.user_replies),
    path('user/<int:pk>', views.user_list),
    path('<int:pk>/user_detail', views.user_detail),
    path('sighting/<int:pk>', views.user_sighting)
]