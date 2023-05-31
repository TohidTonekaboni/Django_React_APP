from django.urls import path
from app.views import user_views
from rest_framework_simplejwt.views import TokenObtainPairView

urlpatterns = [
    path('login/', user_views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),

    path('register/', user_views.registerUser, name='register'),

    path('profile/', user_views.getUserProfile, name="users-profile"),
    path('profile/update/', user_views.updateUserProfile, name="user-profile-update"),
    path('', user_views.getUsers, name="getUsers"),

    path('delete/<str:pk>/', user_views.deleteUser, name='user-delete'),
    path('<str:pk>/', user_views.getUserById, name='user'),
    path('update/<str:pk>/', user_views.updateUser, name='user-update'),
]
