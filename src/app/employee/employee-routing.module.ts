import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';

const routes: Routes = [
  { path: '', component: EmployeeComponent,
   children:[
    {path:'',pathMatch:'full',redirectTo:'employeeList'},
    { path:'employeeList',component:EmployeeListComponent},
    {

      path: 'edit/:id', component: EmployeeFormComponent
    }
   ]
 
},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
