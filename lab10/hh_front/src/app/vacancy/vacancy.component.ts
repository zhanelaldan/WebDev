import {Component, OnInit} from '@angular/core';
import {VacancyService} from "../vacancy.service";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {Vacancy} from "../models";

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  loaded : Boolean;
  vacancies : Vacancy[] = [];

  constructor(private vacancyService: VacancyService, private route: ActivatedRoute) {
    this.loaded = true;
  }
  ngOnInit(): void {
    this.getVacancies()
  }

  getVacancies(){
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));

      this.loaded = false;

      this.vacancyService.getCompanyVacancies(id).subscribe((vacancies) =>{
        this.vacancies = vacancies;
        this.loaded = true;
      })
    })
  }
}