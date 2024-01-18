from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import StudentViewSet
from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'students', StudentViewSet)

urlpatterns = [
    path('', include(router.urls)),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)