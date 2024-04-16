import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private client: HttpClient) { }

  getCompanyVacancies(compID: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${compID}/vacancies`
    )
  }
}