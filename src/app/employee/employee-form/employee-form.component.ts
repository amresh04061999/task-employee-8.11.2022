import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/shared/Overlay/dialog.service';
import { CommunicationService } from '../Services/communication.service';
import { EmployeeHttpService } from '../Services/employee-http.service';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm: FormGroup;
  public isSubmited :boolean;
  public employeid: number;
  public title:string;
  public buttonName:string;
  constructor(
    private fb: FormBuilder,
    private httpService: EmployeeHttpService,
    private comunicationServices: CommunicationService,
    private activatedRouter: ActivatedRoute,
    private dilogservices: DialogService,
  ) {
    this.employeid=0;
    this.isSubmited=false;
    this.title='';
    this.buttonName=''

    /**
     * create form builder
     * @returns
     */
    this.employeeForm = this.fb.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      phoneNo: ['', Validators.required],
      salary: ['', Validators.required],
      fullName: ['']
    });
  console.log(this.employeeForm);
  
   
  }


  ngOnInit(): void {
    this.title=this.employeeForm.value.id ? 'EDIT EMPLOYEE':'ADD EMPLOYEE';
    this.buttonName=this.employeeForm.value.id ? 'UPDATE':'ADD ';
  }

  /**
   * save Employee
   */
  public SaveEmployee() {
    this.isSubmited = true;
    if (this.employeeForm.valid) {
      if(this.employeeForm.value.id ){
        this.dilogservices.close()
        this.httpService.editEmployee(this.employeeForm.value,this.employeeForm.value.id).subscribe((result)=>{
          this.reset();
        })
      }else{
        this.dilogservices.close()
        this.httpService.addEmployee(this.employeeForm.value).subscribe((result) => {
          this.comunicationServices.getEmpoyee(result)
          this.reset();
        });
      }
    }
  }
  /**
   * cancel or close popup
   */
  public cancel() {
    if (this.employeeForm.touched) {
      const close = confirm('are you sure')
      if (close) {
        this.dilogservices.close()
      }
    } else {
      this.dilogservices.close()
    }
    // this.dilogservices.open(ConformMessageComponent)
    // } else {
    // }
  }
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
