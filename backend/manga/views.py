from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets , permissions , authentication

from .serializers import MangaSerializers
from .models import Manga



class MangaViewSet(viewsets.ModelViewSet):
    serializer_class = MangaSerializers
    queryset = Manga.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [authentication.SessionAuthentication]


