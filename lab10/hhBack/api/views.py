import json

from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

from .models import Company, Vacancy


# Create your views here.

@csrf_exempt
def list_companies(request):
    try:
        companies = Company.objects.all()
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        companies = [comp.to_json() for comp in companies]
        return JsonResponse(companies, safe=False, json_dumps_params={'indent': 3}, status=200)

    if request.method == 'POST':
        data = json.loads(request.body)

        comp_name = data.get('name', '')
        comp_description = data.get('description', '')
        comp_city = data.get('city', '')
        comp_address = data.get('address', '')

        new_company = Company.objects.create(name=comp_name,
                                             description=comp_description,
                                             city=comp_city,
                                             address=comp_address)

        return JsonResponse(new_company.to_json(), safe=False, json_dumps_params={'indent': 2}, status=200)


@csrf_exempt
def company_details(request, id):
    try:
        company = Company.objects.get(pk=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, 200)

    if request.method == 'GET':
        return JsonResponse(company.to_json(), safe=False, json_dumps_params={'indent': 2}, status=200)
    if request.method == 'DELETE':
        company.delete()
        return JsonResponse({'data': True})
    if request.method == 'PUT':
        data = json.loads(request.body)

        comp_name = data.get('name', company.name)
        comp_description = data.get('description', company.description)
        comp_city = data.get('city', company.city)
        comp_address = data.get('address', company.address)

        company.name = comp_name
        company.description = comp_description
        company.city = comp_city
        company.address = comp_address
        company.save()

        return JsonResponse(company.to_json(), safe=False, json_dumps_params={'indent': 2}, status=200)


def list_company_vacancies(request, id):
    try:
        company_vacancies = Vacancy.objects.filter(company_id=id)
    except Company.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    company_vacancies = [comp_vac.to_json() for comp_vac in company_vacancies]

    return JsonResponse(company_vacancies, safe=False, json_dumps_params={'indent': 2}, status=200)


@csrf_exempt
def list_vacancies(request):
    try:
        vacancies = Vacancy.objects.all()
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, status=400)

    if request.method == 'GET':
        vacancies = [vac.to_json() for vac in vacancies]
        return JsonResponse(vacancies, safe=False, json_dumps_params={'indent': 3}, status=200)

    if request.method == 'POST':
        data = json.loads(request.body)

        vac_name = data.get('name', '')
        vac_description = data.get('description', '')
        vac_salary = data.get('salary', '')
        vac_company_id = data.get('company_id', '')

        new_vacancy = Vacancy.objects.create(name=vac_name,
                                             description=vac_description,
                                             salary=vac_salary,
                                             company_id=vac_company_id)

        return JsonResponse(new_vacancy.to_json(), safe=False, json_dumps_params={'indent': 2}, status=200)


@csrf_exempt
def vacancy_details(request, id):
    try:
        vacancy = Vacancy.objects.get(pk=id)
    except Vacancy.DoesNotExist as e:
        return JsonResponse({'error': str(e)}, 200)

    if request.method == 'GET':
        return JsonResponse(vacancy.to_json(), safe=False, json_dumps_params={'indent': 2}, status=200)
    if request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({'data': True})
    if request.method == 'PUT':
        data = json.loads(request.body)

        vac_name = data.get('name', '')
        vac_description = data.get('description', '')
        vac_salary = data.get('salary', '')
        vac_company_id = data.get('company_id', '')

        vacancy.name = vac_name
        vacancy.description = vac_description
        vacancy.salary = vac_salary
        vacancy.company = vac_company_id
        vacancy.save()

        return JsonResponse(vacancy.to_json(), safe=False, json_dumps_params={'indent': 2}, status=200)


def list_topten_vacancies(request):
    vacancies = Vacancy.objects.all().order_by('-salary')[:10]

    vacancies = [v.to_json() for v in vacancies]

    return JsonResponse(vacancies, safe=False, json_dumps_params={'indent': 2}, status=200)