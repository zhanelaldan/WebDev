from django.db import models


# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    address = models.TextField()
    class Meta:
        verbose_name = "Company"
        verbose_name_plural = "Companies"




class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, blank=True)
    
    class Meta:
        verbose_name = "Vacancy"
        verbose_name_plural = "Vacancies"