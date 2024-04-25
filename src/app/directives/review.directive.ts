import {
  Directive,
  TemplateRef,
  ViewContainerRef,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

export class AppReviewContext<T = unknown> {
  $implicit: T = null!;
  appReview: T = null!;
  name: T = null!;
}

@Directive({
  selector: '[appReview]',
})
export class ReviewDirective implements OnChanges {
  @Input() set appReview(condition: boolean) {
    this._context = new AppReviewContext();
    if (!condition && !this.hasView) {
      this._context.$implicit = this._context.appReview = condition;
      this._context.name = 'vgri';
      this.viewContainerRef.createEmbeddedView(this.templateRef, this._context);
      // this.viewContainerRef.createEmbeddedView(this.templateRef, {
      //   $implicit: currentValue,
      //   name: 'vgri',
      // });
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
  hasView = false;
  _context: AppReviewContext | undefined;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    //   const currentValue = changes['appReview'].currentValue;
    //   this._context = new AppReviewContext();
    //   if (!currentValue && !this.hasView) {
    //     this._context.$implicit = this._context.appReview = currentValue;
    //     this._context.name = 'vgri';
    //     this.viewContainerRef.createEmbeddedView(this.templateRef, this._context);
    //     // this.viewContainerRef.createEmbeddedView(this.templateRef, {
    //     //   $implicit: currentValue,
    //     //   name: 'vgri',
    //     // });
    //     this.hasView = true;
    //   } else if (currentValue && this.hasView) {
    //     this.viewContainerRef.clear();
    //     this.hasView = false;
    //   }
  }
}
