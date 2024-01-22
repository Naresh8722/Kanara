from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet,StudentListView
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'students', StudentViewSet)

urlpatterns = [
    
    path('', include(router.urls)),
    # path("s/",StudentsListView.as_view(),name='student_list'),
    path('student/', StudentListView.as_view(), name='student-list'),
    # path('/app',)
]