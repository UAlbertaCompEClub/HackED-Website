from django.test import TestCase
from django.contrib.auth.models import User

from datetime import datetime
import json

from rest_framework.test import APIRequestFactory, force_authenticate
from rest_framework import status

from .views import HackEDBetaApplicationAPI

from betaapplications.models import HackEDBetaApplication, School

class APITestCase(TestCase):
    def setUp(self):
        User.objects.create_user('testuser', None, 'password')
        School.objects.create(name='Test School')
        HackEDBetaApplication.objects.create(
            user = User.objects.get(username='testuser'),
            school = School.objects.get(name='Test School'),
            dob = datetime.now(),
            faculty = 'engg',
            graduation_year = '2020',
            gender = HackEDBetaApplication.MALE,
            inspiration = 'I Like Hackathons',
            hackathons_attended = 0,
        )
        

    def test_loggedin_get_hacked_beta_application(self):
        factory = APIRequestFactory()
        user = User.objects.get(username='testuser')
        view = HackEDBetaApplicationAPI.as_view()

        request = factory.get('api/hackedbetaapps/')
        force_authenticate(request, user=user)
        response = view(request)
        response.render()
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(json.loads(response.content)['inspiration'], 'I Like Hackathons')

    def test_loggedout_get_hacked_beta_application(self):
        factory = APIRequestFactory()
        user = User.objects.get(username='testuser')
        view = HackEDBetaApplicationAPI.as_view()

        request = factory.get('api/hackedbetaapps/')
        response = view(request)
        response.render()
        print(response.status_code)
        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)