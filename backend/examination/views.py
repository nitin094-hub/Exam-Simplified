from rest_framework import generics
from rest_framework.response import Response

from .models import AnswerSheet, Exam, StudentAnswersheet

from .serializers import AnswerSheetSerializer, ExamSerializer, StudentAnswerSheetSerializer

class AnswerSheetAPIView(generics.ListCreateAPIView):
    queryset = AnswerSheet.objects.all()
    serializer_class = AnswerSheetSerializer


class StudentAnswersheetAPIview(generics.ListCreateAPIView):
    queryset = StudentAnswersheet.objects.all()
    serializer_class = StudentAnswerSheetSerializer

class ExamAPIView(generics.ListCreateAPIView):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer