from django.urls import path
from users.views import ProfessorDetailsAPI, ProfessorUpdateDeleteAPIView
from users.views import StudentUpdateDeleteAPIView

from users.views import StudentDetailsAPI

urlpatterns = [
    path('student/',StudentDetailsAPI.as_view()),
    path('student/<int:pk>',StudentUpdateDeleteAPIView.as_view()),
    path('professor/',ProfessorDetailsAPI.as_view()),
    path('professor/<int:pk>',ProfessorUpdateDeleteAPIView.as_view()),
]