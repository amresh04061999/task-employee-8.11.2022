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
  public fullname: any
  public pageNumber = 20;
  public distance = 2;
  public pageSize = 1;
  constructor(
    private dilogservices: DialogService,
    private httpService: EmployeeHttpService,
    private comunicationService: CommunicationService,
    private router: Router
  ) {
    this.employeeList = [];
  }
  ngOnInit(): void {
    // Update add record in table suing subject
    this.comunicationService.getAddList$.subscribe((res: any) => {
      if (res) {
        this.getEmployeeList()
      }
      this.employeeList.push(res)
    })
    this.getEmployeeList();
  }
  /**
   * get employee
   */
  public getEmployeeList() {
    this.httpService.getEmployee(this.pageSize, this.pageNumber).subscribe({
      next: (value) => {
        this.employeeList = this.employeeList.concat(value);
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
      `Are you sure you want to delete this data? Delete ${item.fullName}`
    );
    if (deletePop) {
      this.httpService.deleteEmployee(Number(item.id)).subscribe({
        next: (value) => {
          this.getEmployeeList();
        },
        error: (error) => {
          // this.notification.showError("fail Delete","delete")
        },
        complete: () => { },
      });
    } else {
    }
  }
  /**
   *
   */
  public saveEmployee() {
    this.dilogservices.open(EmployeeFormComponent);
  }
  /**
   *
   * @param item
   */
  public editEmployee(item: Employee) {
    const overlayRef = this.dilogservices.open(EmployeeFormComponent);
    overlayRef.instance.employeeForm.patchValue(item);
  }
  /**
   *
   */
  onScrolllist() {
    this.pageSize++;
    this.getEmployeeList();
  }

}
