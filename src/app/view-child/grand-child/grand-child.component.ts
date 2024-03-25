import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.less',
})
export class GrandChildComponent {
  name = 'vgri';

  printName() {
    alert(this.name);
  }
}
