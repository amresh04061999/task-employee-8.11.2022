import { Injectable } from '@angular/core';
import { Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Employee } from './model/Employee.model';
import { EmployeeHttpService } from './Services/employee-http.service';

@Injectable()
export class EmployeeResolver implements Resolve<Employee> {
  constructor(private employeeServices: EmployeeHttpService) { }
  resolve(route: ActivatedRouteSnapshot): Observable<Employee> {
    let id = route.params['id'];
    console.log("get resolver")
    return this.employeeServices.getEmployeeId(id)
  }
}
