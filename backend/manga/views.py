from django.shortcuts import render

# Create your views here.
import os

from rest_framework import viewsets , permissions , authentication , parsers  , generics
from rest_framework.decorators import action
from django.core.serializers import serialize

from backend.settings import *

from rest_framework.response import Response
from django.http import JsonResponse

from .serializers import MangaSerializers
from .models import Manga
from backend.authentication import CsrfExemptSessionAuthentication

from chapter.models import Chapter
from chapter.serializer import ChapterSerializer , ChapterSerializerForManga



class MangaViewSet(viewsets.ModelViewSet):
    serializer_class = MangaSerializers
    queryset = Manga.objects.all()
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [CsrfExemptSessionAuthentication]
    parser_classes = [parsers.MultiPartParser]
    lookup_field = 'uid'

    @action(methods=['GET'] , detail=True)
    def like(self , request , uid):
        manga = self.get_object()
        if(manga.liked_by.filter(id=request.user.id).exists()):
            return Response('Already Liked')
        manga.liked_by.add(request.user)
        return Response('Liked')


   
class MyMangaAPIView(generics.ListAPIView):
    serializer_class = MangaSerializers
    
    def get_queryset(self):
        queryset = Manga.objects.filter(uploader=self.request.user)
        return queryset



class MangaChaptersAPIView(generics.ListAPIView):
    serializer_class = ChapterSerializer

    def get_queryset(self):
        lookup_value = self.kwargs['uid']
        manga= Manga.objects.get(uid=lookup_value)
        queryset = Chapter.objects.filter(manga=manga)
        return queryset


