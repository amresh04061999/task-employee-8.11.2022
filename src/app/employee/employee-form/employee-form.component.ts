import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommunicationService } from '../Services/communication.service';
import { EmployeeHttpService } from '../Services/employee-http.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public isSubmited = false;
  employeid:any
  constructor(
    private fb: FormBuilder,
    private httpService: EmployeeHttpService,
    private  comunicationServices:CommunicationService,
    private activatedRouter: ActivatedRoute,
  ) {
    /**
     * create form builder
     * @returns
     */
    this.employeeForm = this.fb.group({
      // id: [],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      salary: ['', Validators.required],
    });
    
    this.activatedRouter.params.subscribe((res) => {
      this.employeid = res['id'];
      if (this.employeid) {
        this.getcEmployeedetailsById();
      }
    });


  }

  ngOnInit(): void {
    // this.comunicationServices.patchvalue.subscribe((res)=>{
    //   console.log(res);
    //   this.employeeForm.patchValue(res)
    // })
  }
  
  // get company list
  public getcEmployeedetailsById(): void {
    this.httpService.getEmployeeId(Number(this.employeid)).subscribe({
      next: (res) => {
        // value pach in form in edit time
        this.employeeForm.patchValue(res);
      },
    });
  }


  public SaveEmployee() {
    this.isSubmited = true;
    console.log('dd')
      this.httpService.addEmployee(this.employeeForm.value).subscribe((result)=>{
        this.comunicationServices.getAddList.next(result)
        console.log(result)
          this.reset();
      });
    
  }
  public cancel() {}

  /**
   * Reset companyForm
   */
  public reset(): void {
    this.employeeForm.reset();
    this.isSubmited = false;
  }
  // select data employe form
  get employee(): { [key: string]: AbstractControl } {
    return this.employeeForm.controls;
  }
}
