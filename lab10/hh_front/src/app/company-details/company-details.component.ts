import {Component, OnInit} from '@angular/core';
import {Company} from "../models";
import {CompanyComponent} from "../company/company.component";
import {CompanyService} from "../company.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit{
  company : Company;
  loaded : boolean;
  editableCompany : Company;
  edit : boolean;

  constructor(private companyService : CompanyService, private route : ActivatedRoute) {
    this.company = {} as Company;
    this.loaded = true;
    this.edit = false;
    this.editableCompany = {} as Company;
  }

  ngOnInit() {
    this.getCompany()
  }

  getCompany(){
    this.route.paramMap.subscribe((params) =>{
      const id = Number(params.get('id'));

      this.loaded = false;

      this.companyService.getCompany(id).subscribe((company) =>{
        this.company = company;
        this.loaded = true;
      })
    })
  }

  saveChanges(){
    this.companyService.updateCompany(this.editableCompany, this.company.id).subscribe((comp: Company) =>{
      this.company = comp;
    })

    this.edit = !this.edit;

    this.editableCompany = {} as Company;
  }
}