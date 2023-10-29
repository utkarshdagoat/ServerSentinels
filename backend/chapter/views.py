from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets , permissions , authentication ,generics , status , parsers

from .permissions import IsUploaderOfManga

from rest_framework.decorators import action

from rest_framework.response import Response

from .models import Chapter , MangaImage
from backend.authentication import CsrfExemptSessionAuthentication

from manga.models import Manga

from .serializer import ChapterSerializer , ImageSerializer

class ChaperViewSet(viewsets.ModelViewSet):
    serializer_class = ChapterSerializer
    queryset = Chapter.objects.all()
    permission_classes = [permissions.IsAuthenticated , IsUploaderOfManga]
    authentication_classes = [CsrfExemptSessionAuthentication]


class ImageCreateandRetriveAPIView(viewsets.ModelViewSet):
    queryset = MangaImage.objects.all()
    serializer_class  = ImageSerializer
    permission_classes = [permissions.IsAuthenticated , IsUploaderOfManga]
    authentication_classes = [CsrfExemptSessionAuthentication]
    parser_classes = [parsers.MultiPartParser , parsers.JSONParser]


class ImageOfChapter(generics.ListAPIView):
    serializer_class =ImageSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [CsrfExemptSessionAuthentication]
    
    def get_queryset(self):
        lookup_value = self.request.query_params.get('cn' , '')
        manga_id = self.request.query_params.get('mangaid' , '')
        print(lookup_value)
        print(manga_id)
        manga = Manga.objects.get(uid=manga_id)
        chapter = Chapter.objects.filter(number=lookup_value , manga=manga).first()
        queryset = MangaImage.objects.filter(chapter=chapter)
        return queryset




