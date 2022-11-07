import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Employee } from '../model/Employee.model';

@Injectable(
  {
  providedIn: 'root'
}
)
export class CommunicationService {
  public getAddList=new  Subject<Employee>;
  public patchvalue=new  Subject<Employee>;
  constructor() { }
}
