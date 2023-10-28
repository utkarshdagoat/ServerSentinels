from django.shortcuts import render

# Create your views here.
from rest_framework import viewsets , permissions , authentication , status , views , generics , parsers

from django.contrib.auth import authenticate, login , logout

from rest_framework.response import Response

from .serializer import UserSerializer , LoginSerializer , UserSerializerAfterLogin
from .models import User
from backend.authentication import CsrfExemptSessionAuthentication


from django.shortcuts import redirect


class UserViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.AllowAny]
    authentication_classes = [CsrfExemptSessionAuthentication]
    serializer_class = UserSerializer
    queryset = User.objects.all()
    parser_classes  = [parsers.MultiPartParser , parsers.JSONParser]



class isLoggedIn(views.APIView):
    authentication_classes=[CsrfExemptSessionAuthentication]
    def get(self,request,*args,**kwargs):
        content = {"LoggedIn" : False}

        if request.user.is_authenticated:
            print('requesed')
            serializer = UserSerializer(instance=request.user , data={})
            serializer.is_valid(raise_exception=True)
            content = {"LoggedIn":True , 'user':serializer.data }
        return Response(content)

class UserLogin(generics.GenericAPIView): 
    serializer_class= LoginSerializer# User Login
    permission_classes = [permissions.AllowAny]
    def post(self, request, format=None):
        try:
            seraializer = LoginSerializer(data=request.data)
            if(seraializer.is_valid()):
                user = User.objects.get(username=seraializer.validated_data['username'])
                login(request=request , user=user)
                return Response('hello')
            return Response(seraializer.errors)
        except User.DoesNotExist: # If User Record does not exist,
            return Response("Invalid Request" , status=status.HTTP_400_BAD_REQUEST)


class UserLogout(generics.GenericAPIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [CsrfExemptSessionAuthentication,]
    def get(self, request, format=None):
        try:
           logout(request=request)
           return Response("logged out" , status=status.HTTP_204_NO_CONTENT)
        except User.DoesNotExist: # If User Record does not exist,
            return Response("Invalid Request" , status=status.HTTP_400_BAD_REQUEST)