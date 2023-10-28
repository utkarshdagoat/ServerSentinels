from django.shortcuts import render

# Create your views here.

from rest_framework import viewsets , permissions , authentication , parsers 
from rest_framework.decorators import action
from django.core.serializers import serialize

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

    @action(methods=['GET'],detail=True)
    def get_chapter(self,request,pk):
        manga = self.get_object()
        chapters = Chapter.objects.filter(manga=manga)
        serialized_queryset = serialize('json', chapters)
        return JsonResponse(serialized_queryset , safe=False)
            


