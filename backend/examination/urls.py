from django.urls import path

from .views import ExamAPIView, StudentAnswersheetAPIview

urlpatterns = [
    path("exam/", ExamAPIView.as_view()),
    path("answersheet/",StudentAnswersheetAPIview.as_view())
]