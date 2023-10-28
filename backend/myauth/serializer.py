from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    profile_picture = serializers.ImageField(required=False)
    username = serializers.CharField(required=False)
    password = serializers.CharField(required=False)
    class Meta:
        model = User
        fields = ['username' , 'profile_picture' ,'password' ]

class UserSerializerAfterLogin(serializers.ModelSerializer):
    profile_picture = serializers.ImageField( read_only=True)
    username = serializers.CharField( read_only=True)
    password = serializers.CharField( read_only=True)
    class Meta:
        model = User
        fields = ['username' , 'profile_picture' ,'password' ]



class LoginSerializer(serializers.ModelSerializer):

    username = serializers.CharField(max_length=32)
    password = serializers.CharField(max_length=32)
    class Meta:
        model = User
        fields = ['username' , 'password']