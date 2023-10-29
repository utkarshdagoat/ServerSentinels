from django.db import models

from myauth.models import User

import uuid
import os
import uuid
# Create your models here.

def get_filename(instance , filename):
    stringId = str(uuid.uuid4())
    extension = os.path.splitext(filename)[1]
    filename_reformat = stringId + '/'+instance.name + extension
    return filename_reformat



class Manga(models.Model):
    name = models.CharField(max_length=100)
    uploader = models.ForeignKey(to=User , on_delete=models.CASCADE)
    description = models.CharField(max_length=25000)
    cover= models.ImageField(upload_to=get_filename)
    created_at = models.DateTimeField(auto_now_add=True)
    creator = models.CharField(max_length=200)
    liked_by = models.ManyToManyField(to=User , null=True , related_name="like_manga")
    uid =models.UUIDField(default=uuid.uuid4)
    is_nsfw = models.BooleanField(default=False)

    @property
    def image_path(self):
        return os.path.basename(self.cover.name)


