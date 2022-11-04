import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneNoMaskingDirective } from './oevrlay/directive/phone-no-masking.directive';



@NgModule({
  declarations: [
    PhoneNoMaskingDirective
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
