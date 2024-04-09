import { Pipe, PipeTransform } from '@angular/core';
import { IPerson } from '../components/vgri-pipe/vgri-pipe.component';

@Pipe({
  name: 'flyingHeroes',
  pure: false,
})
export class FlyingHeroesPipe implements PipeTransform {
  transform(persons: IPerson[]) {
    return persons.filter((item) => item.canSwim);
  }
}
