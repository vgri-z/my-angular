import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

export class AppUnlessContext<T = unknown> {
  public $implicit: T = null!;
  public appUnless: T = null!;
  public name: T = null!;
}

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  hasView = false;
  private _context = new AppUnlessContext();
  @Input() set appUnless(condition: boolean) {
    this._context.$implicit = this._context.appUnless = condition;
    this._context.name = 'vgri';
    console.log(this._context);
    if (!condition && !this.hasView) {
      // this.viewContainerRef.createEmbeddedView(this.templateRef, {
      //   $implicit: condition,
      //   name: 'vgri',
      // });
      this.viewContainerRef.createEmbeddedView(this.templateRef, this._context);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainerRef.clear();
      this.hasView = false;
    }
  }
  // 结构型指令都是需要创建一段模板的，不管是指令内部的templateRef，还是外部传入传入放任templateRef，都是需要一个templateRef来创建一段模板

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
}
