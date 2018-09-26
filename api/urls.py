from django.conf.urls import include, url
from .views import RegistrationAPI, LoginAPI, UserAPI, HackEDBetaApplicationAPI

urlpatterns = [
    url("^auth/register/$", RegistrationAPI.as_view()),
    url("^auth/login/$", LoginAPI.as_view()),
    url("^auth/user/$", UserAPI.as_view()),
    url("^hackedbetaapps/$", HackEDBetaApplicationAPI.as_view(), name='hacked_beta_application_api')
]