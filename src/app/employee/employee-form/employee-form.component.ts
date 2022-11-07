import { Component, Inject, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { DialogService } from 'src/app/shared/oevrlay/dialog.service';
import { ConformMessageComponent } from '../conform-message/conform-message.component';
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
  employeid: any
  constructor(
    private fb: FormBuilder,
    private httpService: EmployeeHttpService,
    private comunicationServices: CommunicationService,
    private activatedRouter: ActivatedRoute,
    private dilogservices: DialogService,
  ) {
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
    this.activatedRouter.params.subscribe((res) => {
      this.employeid = res['id'];
      console.log(this.employeeForm.value);

    });
  }

  ngOnInit(): void {
    this.comunicationServices.patchvalue$.subscribe((res: any) => {
      console.log(res);
      setTimeout(() => {
        this.employeeForm.patchValue(res)
      }, 200);
    })
  }

  /**
   *
   */
  public SaveEmployee() {
    this.isSubmited = true;
    if (this.employeeForm.valid) {
      this.dilogservices.close()
      this.httpService.addEmployee(this.employeeForm.value).subscribe((result) => {
        this.comunicationServices.getempoyee(result)
        console.log(result)
        this.reset();
      });
    }

  }
  /**
   *
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
