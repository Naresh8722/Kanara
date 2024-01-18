from django.db.models import Q
from rest_framework import viewsets
from .models import Student
from .serializers import StudentSerializer
from rest_framework.pagination import PageNumberPagination

class StudentPagination(PageNumberPagination):
    page_size = 10
    page_size_query_param = 'page_size'
    max_page_size = 100

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    pagination_class = StudentPagination
    def get_queryset(self):
        queryset = Student.objects.all()
        name = self.request.query_params.get('name', None)
        total_marks = self.request.query_params.get('total_marks', None)

        if name:
            queryset = queryset.filter(name__icontains=name)

        if total_marks:
            queryset = queryset.filter(total_marks__gte=total_marks)

        return queryset