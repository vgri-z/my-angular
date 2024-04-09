import { Component } from '@angular/core';

interface IBook {
  name: string;
  price: string;
}

@Component({
  selector: 'app-tpl-operators',
  templateUrl: './tpl-operators.component.html',
  styleUrl: './tpl-operators.component.less',
})
export class TplOperatorsComponent {
  name = 'Vgri';

  book: IBook | undefined;

  person = {
    name: 'vgri',
    age: 18,
  };

  now = Date.now();

  constructor() {
    setTimeout(() => {
      this.book = {
        price: '12',
        name: 'The Little Prince',
      };
    }, 1000);
  }
}
