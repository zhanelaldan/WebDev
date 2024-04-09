from django.urls import path

from . import views

urlpatterns = [
    path('companies/', views.list_companies, name='list of companies'),
    path('companies/<int:id>/', views.company_details, name='company details'),
    path('companies/<int:id>/vacancies/', views.list_company_vacancies, name='list of vacancies of company'),
    path('vacancies/', views.list_vacancies, name='list of vacancies'),
    path('vacancies/<int:id>/', views.vacancy_details, name='vacancy details'),
    path('vacancies/top_ten/', views.list_topten_vacancies, name='list of top ten vacancies'),

]
