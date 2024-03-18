import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export class VgriUnlessContext<T = unknown> {
  $implicit: T = null!;
  appReview: T = null!;
  name: T = null!;
}

@Directive({
  selector: '[appReview]',
})
export class ReviewDirective {
  hasView = false;
  _context = new VgriUnlessContext();
  @Input() set appReview(condition: boolean) {
    if (!condition && !this.hasView) {
      this._context.$implicit = this._context.appReview = condition;
      this._context.name = 'vgri is good';
      this.viewContainerRef.createEmbeddedView(this.templateRef, this._context);
      this.hasView = true;
    } else if (this.hasView && condition) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
