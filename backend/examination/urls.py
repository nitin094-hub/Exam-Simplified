from django.urls import path

from .views import AnswerSheetAPIView, ExamAPIView, StudentAnswersheetAPIview

urlpatterns = [
    path("exam/", ExamAPIView.as_view()),
    path("answersheet/",AnswerSheetAPIView.as_view()),
    path('student-sheet/', StudentAnswersheetAPIview.as_view())
]