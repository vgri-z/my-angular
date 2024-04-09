import { Component } from '@angular/core';

export interface IPerson {
  name: string;
  age: number;
  canSwim: boolean;
}

@Component({
  selector: 'app-vgri-pipe',
  templateUrl: './vgri-pipe.component.html',
  styleUrl: './vgri-pipe.component.less',
})
export class VgriPipeComponent {
  person = {
    name: 'vgri',
    age: 18,
    number: '1874824777',
  };

  map = new Map([
    ['name', 'vgri'],
    ['age', '18'],
  ]);

  num = 2;
  exponent = 1;

  persons: IPerson[] = [
    { name: 'vgri', age: 19, canSwim: false },
    { name: 'vae', age: 18, canSwim: true },
    { name: 'silence', age: 17, canSwim: false },
    { name: 'zbq', age: 16, canSwim: false },
  ];
  personName = '';

  reset() {
    this.persons = this.persons.slice();
  }

  addPerson() {
    const name = this.personName.trim();
    if (!name) return;
    const person = { name: this.personName, age: 18, canSwim: true };
    this.persons.push(person);
    // this.persons = [...this.persons, person];
    this.personName = '';
  }
}
