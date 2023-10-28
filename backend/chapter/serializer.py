from rest_framework import serializers

from .models import Chapter , MangaImage

class ChapterSerializer(serializers.ModelSerializer):

    class Meta:
        model =Chapter
        fields = '__all__'


class ImageSerializer(serializers.ModelSerializer):

    class Meta:
        model = MangaImage
        fields = ['image' , 'chapter' , 'relNumber']