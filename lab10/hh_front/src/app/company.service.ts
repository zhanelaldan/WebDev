import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Company, Vacancy} from "./models";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  BASE_URL = 'http://127.0.0.1:8000/'

  constructor(private client : HttpClient) { }

   getCompanies(): Observable<Company[]> {
      return this.client.get<Company[]>(
        `${this.BASE_URL}/api/companies/`
      )
    }

    getCompany(id: number): Observable<Company>{
      return this.client.get<Company>(
        `${this.BASE_URL}/api/companies/${id}`
      )
    }

    deleteCompany(id: number): Observable<any> {
      return this.client.delete<any>(
        `${this.BASE_URL}/api/companies/${id}`
      )
    }

    createCompany(company: Company): Observable<Company>{
      return this.client.post<Company>(`${this.BASE_URL}/api/companies/`,  company)
    }

    updateCompany(company: Company, vac_id: number) : Observable<Company>{
    return this.client.put<Company>(
      `${this.BASE_URL}/api/companies/${vac_id}/`,
      company
    )
  }

}