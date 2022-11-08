import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/Employee.model';
import { EmployeeAdapter } from './employee.adapter';
@Injectable()
export class EmployeeHttpService {
  public baseURL: string;
  constructor(private _http: HttpClient,
    private employeeAdapter: EmployeeAdapter) {
    this.baseURL = environment.baseURL;
  }
  /**
   *  add employee service
   * @param employee
   * @returns array
   */
  addEmployee(employee: Employee): Observable<Employee> {
    const URL: string = `${this.baseURL}employee`;
    return this._http.post<Employee>(URL, employee);
  }
  /**\
   * getemployee service
   */
  getEmployee(pageNumber: number, pageSize: number): Observable<Employee[]> {
    const URL: string = `${this.baseURL}employee`;
    return this._http.get<Employee[]>(`${URL}?_page=${pageNumber}&_limit=${pageSize}`)
      .pipe(map((item: Employee[]) => {
        return item.map((item: any) => this.employeeAdapter.toResponse(item))
      }));
  }
  /**
   * Delete employee service
   * @param id
   * @returns
   */
  deleteEmployee(id: number): Observable<Employee> {
    const URL: string = `${this.baseURL}employee/` + id;
    return this._http.delete<Employee>(URL);
  }
  /**
   * get EMployee id service
   * @param id
   * @returns
   */
  getEmployeeId(id: number): Observable<Employee> {
    const URL: string = `${this.baseURL}employee/` + id;
    return this._http.get<Employee>(URL);
  }
  /**
   * Edit employee service
   * @param employee
   * @param id
   * @returns
   */
  editEmployee(employee: Employee, id: number): Observable<Employee> {
    const URL: string = `${this.baseURL}employee/` + id;
    return this._http.put<Employee>(URL, employee);
  }
}

