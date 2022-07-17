from rest_framework import generics
from rest_framework.response import Response
from users.models import Professor, Student
from users.serializers import ProfessorSerializer, StudentSerializer
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response

class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                           context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'user_id': user.pk,
            'is_professor': user.is_professor,
            'is_superuser': user.is_superuser,
        })

class StudentDetailsAPI(generics.ListCreateAPIView):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

class StudentUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = StudentSerializer
    queryset = Student.objects.all()

class ProfessorDetailsAPI(generics.ListCreateAPIView):
    serializer_class = ProfessorSerializer
    queryset = Professor.objects.all()

class ProfessorUpdateDeleteAPIView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = ProfessorSerializer
    queryset = Professor.objects.all()
