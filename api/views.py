from django.shortcuts import render

from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from knox.models import AuthToken

from .serializers import CreateUserSerializer, UserSerializer, LoginUserSerializer, HackEDBetaApplicationSerializer

from betaapplications.models import HackEDBetaApplication

class RegistrationAPI(generics.GenericAPIView):
    serializer_class = CreateUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginUserSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)
        })

class UserAPI(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated, ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user

class HackEDBetaApplicationAPI(APIView):
    """
    HackED Beta Application API
    """

    permission_classes = [permissions.IsAuthenticated, ]

    def get(self, request, format=None):
        """
        Get a users HackED Beta Application.
        """
        queryset = HackEDBetaApplication.objects.get(user=request.user)
        serializer = HackEDBetaApplicationSerializer(queryset, many=False, context={'request': request})
        return Response(serializer.data)

    def post(self, request, format=None):
        """
        Post a users HackED Beta Application.
        """
        serializer = HackEDBetaApplicationSerializer(data=request.data, many=False, context={'request': request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
