import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appReview]',
})
export class ReviewDirective {
  @Input('appReview') lightColor = 'yellow';
  @Output() review = new EventEmitter<string>();
  constructor(private el: ElementRef) {}

  @HostListener('mouseenter', ['$event']) onMouseenter(event: MouseEvent) {
    console.log(event);
    this.highLight(this.lightColor);
  }

  @HostListener('mouseleave') onMouseleave() {
    this.highLight('');
    this.review.emit('mouse --- ');
  }

  highLight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
