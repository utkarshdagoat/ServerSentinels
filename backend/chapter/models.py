from django.db import models
import uuid
import os
# Create your models here.

from manga.models import Manga

# Create your models here.

def get_filename(instance , filename):
    stringId = str(uuid.uuid4())
    extension = os.path.splitext(filename)[1]
    filename_reformat = stringId + '/'+ instance.chapter.manga.name+ '/' + str(instance.chapter.id) + '/' + str(MangaImage.relNumber) + extension
    return filename_reformat



class Chapter(models.Model):
    manga = models.ForeignKey(to=Manga,on_delete=models.CASCADE)
    number = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)


class MangaImage(models.Model):
    chapter = models.ForeignKey(to=Chapter , on_delete=models.CASCADE)
    relNumber = models.IntegerField(default=0)
    image = models.ImageField(upload_to=get_filename) 

