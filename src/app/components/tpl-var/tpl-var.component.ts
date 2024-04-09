import { Component } from '@angular/core';

@Component({
  selector: 'app-tpl-var',
  templateUrl: './tpl-var.component.html',
  styleUrl: './tpl-var.component.less',
})
export class TplVarComponent {
  name = '';

  size = 16;

  showName(name: string) {
    console.log(name);
  }
}
