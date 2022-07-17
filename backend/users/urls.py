from django.urls import path

from users.views import StudentDetailsAPI

urlpatterns = [
    path('student/',StudentDetailsAPI.as_view()),
]