import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';
import { DialogService } from './Overlay/dialog.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyPipe } from './pipe/currency.pipe';
import { PhoneNomaskingDirective } from '../employee/directive/phone-nomasking.directive';

@NgModule({
  declarations: [
    CurrencyPipe,
    PhoneNomaskingDirective
  ],
  imports: [
    CommonModule,
    OverlayModule,
    ReactiveFormsModule,
  ],
  exports: [CurrencyPipe, PhoneNomaskingDirective],
  providers: [DialogService,]
})
export class SharedModule { }
