from django.urls import path, include
from comments import views

urlpatterns = [
    path('',views.add_comment),
    path('all/', views.get_all_comments),
    # path('<str:video_id>/', views.video_comments),
]