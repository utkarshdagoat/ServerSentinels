from rest_framework import serializers
from .models import User

class UserSerializer(serializers.ModelSerializer):
    profile_picture = serializers.ImageField(required=False)
    class Meta:
        model = User
        fields = ['username' , 'profile_picture' ,'password' ]

    def create(self , validated_data):
        try:
            user = User.objects.get(username=validated_data['username'])
            pass
        except User.DoesNotExist:
            user = User.objects.create(**validated_data)
            return user


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