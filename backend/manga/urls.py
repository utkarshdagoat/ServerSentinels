from django.contrib import admin
from django.urls import path , include


from rest_framework.routers import DefaultRouter

from .views import MangaViewSet , MyMangaAPIView

router = DefaultRouter()
router.register(r'', MangaViewSet)



urlpatterns = [
    path('' , include(router.urls)),
    path('manga/mine/' , MyMangaAPIView.as_view())
]
