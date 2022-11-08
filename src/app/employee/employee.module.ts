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
import { EmployeeAdapter } from './Services/employee.adapter';
import { SharedModule } from '../shared/shared.module';
import { ConformMessageComponent } from './conform-message/conform-message.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeFormComponent,
    EmployeeListComponent,
    ConformMessageComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    InfiniteScrollModule
  ],
  providers: [EmployeeHttpService, EmployeeResolver, EmployeeAdapter
  ]
})
export class EmployeeModule { }
