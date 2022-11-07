import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeHttpService } from './Services/employee-http.service';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeResolver } from './employee.resolver';
@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers:[EmployeeHttpService,EmployeeResolver
  ]
})
export class EmployeeModule { }
