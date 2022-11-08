import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Employee } from '../model/Employee.model';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class CommunicationService {

  public getAddList$: Observable<Employee>
  public getAddList: Subject<Employee>
  public getEditList: Subject<Employee>


  constructor() {
    this.getAddList = new Subject();
    this.getAddList$ = this.getAddList.asObservable()
    this.getEditList = new Subject();

  }

  getEmpoyee(employee: Employee) {
    this.getAddList.next(employee)
  }

}
