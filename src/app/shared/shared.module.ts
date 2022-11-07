import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogService } from './oevrlay/dialog.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    OverlayModule,
    ReactiveFormsModule,
  ],
  providers:[DialogService]
})
export class SharedModule { }
