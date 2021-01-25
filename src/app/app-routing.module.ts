import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeeComponent } from './employee/list-employee.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { CdkEmployeeComponent } from './employee/cdk-employee.component';

const routes: Routes = [
  { path: 'list', component:  ListEmployeeComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: 'cdk', component: CdkEmployeeComponent },
  { path: '',redirectTo: '/list', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
