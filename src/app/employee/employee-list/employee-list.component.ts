import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/oevrlay/dialog.service';
import { EmployeeFormComponent } from '../employee-form/employee-form.component';
import { Employee } from '../model/Employee.model';
import { CommunicationService } from '../Services/communication.service';
import { EmployeeHttpService } from '../Services/employee-http.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  // getemployee list variable
  public employeeList: Employee[];
  public fullname:any
  constructor(
    private dilogservices: DialogService,
    private httpService: EmployeeHttpService,
    private comunicationService:CommunicationService,
    private router:Router
  ) {
    this.employeeList = [];
  }

  ngOnInit(): void {
    this.getEmployeeList();
      // Update add record in table suing subject
     this.comunicationService.getAddList.subscribe((res:any)=>{
      this.employeeList.push(res)
     })
  }
  /**
   * get employee
   */
  public getEmployeeList() {
    this.httpService.getEmployee().subscribe({
      next: (value) => {
        this.employeeList = value;
        console.log(value);
      },
    });
  }

/**
 *  Delete employe function 
 * @param item 
 */
  public deleteEmploye(item: Employee) {
    const deletePop = confirm(
      `Are you sure you want to delete this data? Delete ${item.firstName}`
    );
    if (deletePop) {
      this.httpService.deleteEmployee(Number(item.id)).subscribe({
        next: (value) => {
          this.getEmployeeList();
        },
        error: (error) => {
          // this.notification.showError("fail Delete","delete")
        },
        complete: () => {},
      });
    } else {
    }
  }
  public saveEmployee() {
    this.dilogservices.open(EmployeeFormComponent);
  }

  public editEmployee(item:Employee) {
    this.dilogservices.open(EmployeeFormComponent);
    this.router.navigate(['employee/edit',item.id]);
    // this.comunicationService.patchvalue.next(item);
  }

}
