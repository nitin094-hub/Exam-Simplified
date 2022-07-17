import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser

# Create your models here.

class Student(models.Model):
    id = models.UUIDField(primary_key=True, default= uuid.uuid4)
    registration_number = models.CharField(max_length=15)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    gender = models.CharField(max_length=50)
    dob = models.DateField()
    st_class = models.IntegerField()
    father_name = models.CharField(max_length=50)
    mother_name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    nationality = models.CharField(max_length=50)

class Professor(models.Model):
    name = models.CharField(max_length=50)
    email = models.EmailField()
    gender = models.CharField(max_length=50)
    dob = models.DateField()
    father_name = models.CharField(max_length=50)
    mother_name = models.CharField(max_length=50)
    address = models.CharField(max_length=50)
    nationality = models.CharField(max_length=50)

class CustomUser(AbstractUser):
    is_superuser = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)
    is_professor = models.BooleanField(default=False)