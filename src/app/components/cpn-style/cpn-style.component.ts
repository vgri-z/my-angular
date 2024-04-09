import { Component, ElementRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cpn-style',
  templateUrl: './cpn-style.component.html',
  styleUrl: './cpn-style.component.less',
  encapsulation: ViewEncapsulation.Emulated,
})
export class CpnStyleComponent {
  constructor(private el: ElementRef) {
    // 组件的宿主元素，就是组件的标签
    console.log(this.el);
  }
}
