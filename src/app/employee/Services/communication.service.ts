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
  private getAddList: Subject<Employee>;

  public patchvalue$: Observable<Employee>
  public patchvalue: Subject<Employee>;

  constructor() {
    this.getAddList = new Subject();
    this.patchvalue = new Subject()
    this.getAddList$ = this.getAddList.asObservable()
    this.patchvalue$ = this.patchvalue.asObservable()
  }
  getempoyee(employee: Employee) {
    this.getAddList.next(employee)
  }

  getpatchvalue(employe: Employee) {
    this.patchvalue.next(employe)
  }
}
