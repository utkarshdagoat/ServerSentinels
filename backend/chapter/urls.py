from django.contrib import admin
from django.urls import path , include


from rest_framework.routers import DefaultRouter

from .views import ChaperViewSet , ImageCreateandRetriveAPIView , ImageOfChapter

router = DefaultRouter()
router.register(r'chapter', ChaperViewSet , basename="chapter")
router.register(r'images', ImageCreateandRetriveAPIView , basename='images')



urlpatterns = [
    path('' , include(router.urls)),
    path('chapter_images/' , ImageOfChapter.as_view())
]
