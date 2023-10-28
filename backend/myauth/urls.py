from django.contrib import admin
from django.urls import path , include


from rest_framework.routers import DefaultRouter

from .views import  UserViewSet , UserLogin , UserLogout


router = DefaultRouter()
router.register(r'users', UserViewSet)



urlpatterns = [
    path('' , include(router.urls)),
    path('login/' ,UserLogin.as_view() ),
    path('logout/' , UserLogout.as_view())
]
