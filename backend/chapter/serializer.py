from rest_framework import serializers

from .models import Chapter , MangaImage

from manga.models import Manga

class ChapterSerializer(serializers.ModelSerializer):
    manga = serializers.PrimaryKeyRelatedField(read_only=True)
    uid = serializers.UUIDField(read_only=False , required=True)
    class Meta:
        model =Chapter
        fields = ['manga' , 'number' , 'created_at' , 'uid' , 'id']


    def create(self , validated_data):
        try:
            validated_data['manga'] = Manga.objects.get(uid=validated_data['uid'])
            instance = Chapter.objects.create(manga=validated_data['manga'] , number=validated_data['number'])
            return instance
        except Manga.DoesNotExist:
            raise serializers.ValidationError("Invalid Uid")


class ChapterSerializerForManga(serializers.Serializer):
    cover = serializers.ImageField()
    chapter_number = serializers.IntegerField()
    created_at = serializers.DateTimeField()


class ImageSerializer(serializers.ModelSerializer):
    relNumber = serializers.CharField(max_length=32)
    chapter = serializers.CharField()
    class Meta:
        model = MangaImage
        fields = ['image' , 'chapter' , 'relNumber']

    def create(self, validated_data):
        try:
            validated_data['relNumber'] = int(validated_data['relNumber'])
            validated_data['chapter'] = Chapter.objects.get(id=int(validated_data['chapter']))
            instance = MangaImage.objects.create(**validated_data)
            return instance
        except TypeError:
             raise serializers.ValidationError(detail="Invalid relative number")
