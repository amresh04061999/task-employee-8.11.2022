import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {


  transform(value: number, currencyValue: number): unknown {
    let rupess;
    if (currencyValue === 80) {
      rupess = "₹" + 80 * value
    }
    return rupess
  }
}
