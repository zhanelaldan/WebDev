import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CompanyComponent} from "./company/company.component";
import {VacancyComponent} from "./vacancy/vacancy.component";
import {CompanyDetailsComponent} from "./company-details/company-details.component";

const routes: Routes = [
  {path: 'companies', component: CompanyComponent},
  {path: 'companies/:id', component:CompanyDetailsComponent},
  {path: 'companies/:id/vacancies', component: VacancyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }