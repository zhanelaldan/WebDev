import { Component, OnInit } from '@angular/core';
import {Company} from "../models";
import {CompanyService} from "../company.service";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{

  ngOnInit(): void {
    this.getCompanies();
  }
  companies : Company[] = [];

  newCompany : Company;

  constructor(private companyService: CompanyService) {
    this.newCompany = {} as Company;
  }

  getCompanies(){
    this.companyService.getCompanies().subscribe((companies =>{
      this.companies = companies;
    }))
  }

  deleteCompany(id: number){
    this.companyService.deleteCompany(id).subscribe((company => {
      this.companies = this.companies.filter((comp) => comp.id != id)
    }))
  }

  createCompany(){
    this.companyService.createCompany(this.newCompany).subscribe((comp) => {
      this.companies.push(comp);
      this.newCompany = {} as Company;
    })
  }


}