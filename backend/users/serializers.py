from attr import field
from rest_framework import serializers
from .models import Student, Professor

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        field = "__all__"

class ProfessorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professor
        field = "__all__"