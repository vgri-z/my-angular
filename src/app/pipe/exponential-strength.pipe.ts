import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialStrength',
})
export class ExponentialStrengthPipe implements PipeTransform {
  transform(value: number, exponent = 1) {
    const res = Math.pow(value, exponent);
    return res;
  }
}
