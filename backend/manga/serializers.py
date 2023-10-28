from rest_framework import serializers

from .models import Manga

from myauth.serializer import UserSerializer


class MangaSerializers(serializers.ModelSerializer):
    uploader = UserSerializer(read_only=True)
    latest_chapter = serializers.SerializerMethodField()
    like_count = serializers.SerializerMethodField()
    class Meta:
        model = Manga
        fields = ['uploader' , 'name' , 'description' , 'cover' , 'created_at' , 'creator' , 'latest_chapter' , 'like_count']

    def create(self , validated_data):
        user = self.context['request'].user
        validated_data['uploader'] = user
        instance = Manga.objects.create(**validated_data)
        return instance
    
    def get_latest_chapter(self,obj):
        try:
            latest_chapter = Chapter.objects.filter(manga=obj.id).order_by('-created_at').first()
            return latest_chapter.number
        except:
            return 0
    def get_like_count(self,obj):
        try:
            like_count = obj.liked_by.all().count()
            return like_count
        except:
            return 0


class MangaQuerysetSerializers(serializers.ModelSerializer):
    uploader = UserSerializer(read_only=True)
    latest_chapter = serializers.SerializerMethodField()

    
