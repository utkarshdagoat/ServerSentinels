from rest_framework import serializers

from .models import Manga

from myauth.serializer import UserSerializer


class MangaSerializers(serializers.ModelSerializer):
    uploader = UserSerializer(read_only=True)
    class Meta:
        model = Manga
        fields = ['uploader' , 'name' , 'description' , 'cover' , 'created_at' , 'creator']

    def create(self , validated_data):
        user = self.context['request'].user
        validated_data['uploader'] = user
        instance = Manga.objects.create(**validated_data)
        return instance
