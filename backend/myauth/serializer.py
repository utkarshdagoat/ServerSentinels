from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['username' , 'profile_picture' ,'password' ]


class LoginSerializer(serializers.ModelSerializer):

    username = serializers.CharField(max_length=32)
    password = serializers.CharField(max_length=32)
    class Meta:
        model = User
        fields = ['username' , 'password']