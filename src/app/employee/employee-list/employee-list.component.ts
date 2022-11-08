import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogService } from 'src/app/shared/Overlay/dialog.service';
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
  public pageNumber: number;
  public distance: number;
  public pageSize: number;
  constructor(private dilogservices: DialogService,
    private httpService: EmployeeHttpService,
    private comunicationService: CommunicationService,
  ) {
    this.employeeList = [];
    this.pageNumber = 20;
    this.distance = 2;
    this.pageSize = 1;
  }

  ngOnInit(): void {
    //  getEmployee function call
    this.getEmployeeList();
    /***
     * get Savedata using obesravble and update employee list
     */
    this.comunicationService.getAddList.subscribe((res: any) => {
      this.employeeList.push(res)
    });
    //  Update edit record in table using subject
    this.comunicationService.getEditList.subscribe((result: Employee) => {
      const i = this.employeeList.findIndex(
        (value: any) => value.id === result.id
      );
      this.employeeList.splice(i, 1, result);
    });
  }
  /**
   * get employee details
   */
  public getEmployeeList() {
    this.httpService.getEmployee(this.pageSize, this.pageNumber).subscribe({
      next: (value) => {
        this.employeeList = this.employeeList.concat(value);
        // this.employeeList = value
      }
    });
  }
  /**
   *  Delete employe d
   * @param item
   */
  public deleteEmploye(item: Employee) {
    const deletePop = confirm(
      `Are you sure you want to delete this data? Delete ${item.fullName}`
    );
    if (deletePop) {
      this.httpService.deleteEmployee(Number(item.id)).subscribe({
        next: (value) => {
          this.getEmployeeList()
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
   * Open overlay component
   */
  public saveEmployee() {
    this.dilogservices.open(EmployeeFormComponent);
  }

  /**
   * Open overlay component and patch value
   * @param item
   */
  public editEmployee(item: Employee) {
    const overlayRef = this.dilogservices.open(EmployeeFormComponent);
    overlayRef.instance.employeeForm.patchValue(item);
  }
  /**
   *Scroll pagination
   */
  public onScrolllist() {
    this.pageSize++;
    this.getEmployeeList();

  }
}
