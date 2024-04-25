import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigAge',
  pure: false,
})
export class BigAgePipe implements PipeTransform {
  transform(
    value: { name: string; age: number }[]
  ): { name: string; age: number }[] {
    return value.filter((item) => item.age >= 20);
  }
  // transform(value: number, exponent: number): number {
  //   return Math.pow(value, exponent);
  // }
}
