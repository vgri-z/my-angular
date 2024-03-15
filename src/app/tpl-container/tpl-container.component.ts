import {
  AfterViewInit,
  Component,
  ElementRef,
  EmbeddedViewRef,
  OnInit,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';

@Component({
  selector: 'app-tpl-container',
  templateUrl: './tpl-container.component.html',
  styleUrl: './tpl-container.component.less',
})
export class TplContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('divBox') readonly divBox: ElementRef<HTMLElement> | undefined;
  @ViewChild('firstTpl', { read: TemplateRef })
  readonly firstTpl: TemplateRef<any> | undefined;
  @ViewChild('secondTpl', { read: TemplateRef }) readonly secondTpl:
    | TemplateRef<any>
    | undefined;
  @ViewChild('thirdTpl', { read: TemplateRef }) readonly thirdTpl:
    | TemplateRef<any>
    | undefined;
  @ViewChild('fourthTpl', { read: TemplateRef }) readonly fourthTpl:
    | TemplateRef<any>
    | undefined;
  @ViewChild('freeTpl', { read: TemplateRef }) readonly freeTpl:
    | TemplateRef<any>
    | undefined;

  @ViewChild('firstContainer', { read: ViewContainerRef, static: true })
  readonly firstContain: ViewContainerRef | undefined;
  @ViewChild('secondContainer', { read: ViewContainerRef })
  readonly secondContainer: ViewContainerRef | undefined;

  freeViewRef: EmbeddedViewRef<any> | undefined;
  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // console.log(this.firstTpl);
    // 将这一段firstTpl添加到页面中去
    // 1. 先初始化一个内嵌视图
    const firstViewRef = this.firstTpl?.createEmbeddedView(null);
    // console.log(firstViewRef);
    // 2.1通过操作DOM的方式将内前视图中的元素添加页面上
    // this.divBox?.nativeElement.appendChild(firstViewRef?.rootNodes[0]);
    // 2.2 通过insert方法
    // this.firstContain?.insert(firstViewRef as ViewRef);
    // 2.3 直接通过ViewContainerRef的createEmbeddedView创建并插入视图
    setTimeout(() => {
      this.firstContain?.createEmbeddedView(this.firstTpl!, null);
    });
    // TemplateRef与ViewContainerRef都有createEmbeddedView方法，但是有所不同，ViewContainerRef的这个方法需要传入一段TemplateRef模板，
    // 但是Template不用，因为Temp拉特R额发自己就是一端内嵌模板了

    // 初始化freeViewRef
    this.freeViewRef = this.freeTpl?.createEmbeddedView({
      $implicit: 'vgri',
      fr: 'free',
    });
  }

  insert(tpl: TemplateRef<any>) {
    this.firstContain?.createEmbeddedView(tpl);
  }

  insertAll() {
    [this.secondTpl, this.thirdTpl, this.fourthTpl].forEach((item) => {
      this.firstContain?.createEmbeddedView(item!, null);
    });
  }

  getOne() {
    const getTpl = this.firstContain?.get(0);
    console.log(getTpl);
  }

  insertFree() {
    this.firstContain?.insert(this.freeViewRef!);
  }

  getIndex() {
    const index = this.firstContain?.indexOf(this.freeViewRef!);
  }

  move() {
    this.firstContain?.move(this.freeViewRef!, 0);
  }

  move2To4() {
    const getSecond = this.firstContain?.detach(1);
    this.firstContain?.move(getSecond!, 4);
  }

  move2ToCasual() {
    const getSecond = this.firstContain?.detach(1);
    this.secondContainer?.insert(getSecond!);
  }
}
