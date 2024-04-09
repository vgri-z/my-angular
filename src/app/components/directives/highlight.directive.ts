import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight = 'lime';
  @Input() vgriColor = 'green';

  // 属性型指令中获取宿主元素的方法
  constructor(private el: ElementRef) {
    // this.el.nativeElement.style.backgroundColor = 'lime';
  }
  // 处理用户事件 鼠标移入时修改背景色 鼠标移出时回复背景色
  @HostListener('mouseenter', ['$event']) onMouseEnter(event: MouseEvent) {
    // console.log(event);
    console.log(this.vgriColor);
    this.highLight(this.appHighlight);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highLight('');
  }

  highLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
