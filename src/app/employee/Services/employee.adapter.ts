import { Employee } from '../model/Employee.model';
/***
 *concat firs name last name
 */
export class EmployeeAdapter {
  /**
   * To response
   * @param item
   * @returns response
   */
  public toResponse(item: any) {
    const employeedata: Employee = new Employee();
    employeedata.id = item.id;
    employeedata.email = item.email;
    employeedata.phoneNo = item.phoneNo;
    employeedata.salary = item.salary;
    employeedata.fullName = item.firstName.concat(" " + item.lastName);
    return employeedata
  }

}
