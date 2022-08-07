import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertcm'
})
export class ConvertcmPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value * 100000 + ' cm';
  }

}
