from django.contrib.auth import authenticate
from rest_framework import serializers
from django.contrib.auth.models import User
from betaapplications.models import HackEDBetaApplication, School

class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(validated_data['username'],
                                        None,
                                        validated_data['password'])
        return user


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username')


class LoginUserSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError("Unable to log in with provided credentials.")

class HackEDBetaApplicationSerializer(serializers.ModelSerializer):

    user = serializers.HiddenField(
        default=serializers.CurrentUserDefault()
    )

    school = serializers.SlugRelatedField(
        queryset=School.objects.all(),
        slug_field='name'
    )

    class Meta:
        model = HackEDBetaApplication
        fields = ('user', 'school', 'dob', 'faculty', 'graduation_year', 'gender', 'inspiration',
            'dietary_restrictions', 'accommodations', 'paid', 'hackathons_attended')

