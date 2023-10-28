from django.db import models

from .manager import MyUserManager

from django.contrib.auth.models import AbstractBaseUser



class User(AbstractBaseUser):
    username = models.CharField(max_length=32 , unique=True)
    profile_picture = models.ImageField(upload_to="dp/")
    password = models.CharField(max_length=32)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True , blank=True)

    REQUIRED_FIELDS = ['password']
    USERNAME_FIELD = 'username'


    objects = MyUserManager()



