from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets , permissions , authentication ,generics , status , parsers

from .permissions import IsUploaderOfManga

from rest_framework.response import Response

from .models import Chapter , MangaImage
from backend.authentication import CsrfExemptSessionAuthentication

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

