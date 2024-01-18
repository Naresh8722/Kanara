from django.db import models
# Create your models here.
class Student(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    total_marks = models.DecimalField(max_digits=5, decimal_places=2)

    def __str__(self):
        return self.name