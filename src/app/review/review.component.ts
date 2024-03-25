import {
  AfterViewInit,
  Component,
  ElementRef,
  EmbeddedViewRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.less',
})
export class ReviewComponent implements AfterViewInit {
  @ViewChild('divBox') readonly divBox: ElementRef<HTMLElement> | undefined;
  @ViewChild('firstTpl', { read: TemplateRef }) readonly firstTpl:
    | TemplateRef<any>
    | undefined;
  @ViewChild('secondTpl', { read: TemplateRef }) readonly secondTpl:
    | TemplateRef<any>
    | undefined;
  @ViewChild('thirdTpl', { read: TemplateRef }) readonly thirdTpl:
    | TemplateRef<any>
    | undefined;
  @ViewChild('fourthTpl', { read: TemplateRef }) readonly fourthTpl:
    | TemplateRef<any>
    | undefined;
  @ViewChild('firstContainer', { read: ViewContainerRef, static: true })
  readonly firstContain: ViewContainerRef | undefined;
  @ViewChild('secondContainer', { read: ViewContainerRef, static: true })
  readonly secondContainer: ViewContainerRef | undefined;
  @ViewChild('freeTpl', { read: TemplateRef }) readonly freeTpl:
    | TemplateRef<any>
    | undefined;

  freeViewRef: EmbeddedViewRef<any> | undefined;

  ngAfterViewInit(): void {
    this.freeViewRef = this.freeTpl?.createEmbeddedView({});
    const viewRef = this.firstTpl?.createEmbeddedView(null);
    // const nodes = viewRef?.rootNodes;
    // nodes?.forEach((item: HTMLElement) => {
    //   this.divBox?.nativeElement.appendChild(item);
    // });
    setTimeout(() => {
      this.firstContain?.createEmbeddedView(this.firstTpl!, {
        $implicit: 'vgri',
        age: 18,
      });
    });
    // this.firstContain?.insert(viewRef as ViewRef);
  }

  insert(tpl: TemplateRef<any>) {
    this.firstContain?.createEmbeddedView(tpl);
  }

  insertAll() {
    [this.secondTpl, this.thirdTpl, this.fourthTpl].forEach((item) => {
      this.firstContain?.createEmbeddedView(item!);
    });
  }

  getOne() {
    const getTpl = this.firstContain?.get(2);
    console.log(getTpl);
  }

  insertFree() {
    this.firstContain?.insert(this.freeViewRef!);
  }

  getIndex() {
    const index = this.firstContain?.indexOf(this.freeViewRef!);
    console.log(index);
  }

  move() {
    const temTpl = this.firstContain?.detach(0);
    this.firstContain?.move(temTpl!, 3);
  }

  move2To4() {
    const temTpl = this.firstContain?.detach(1);
    this.firstContain?.move(temTpl!, 3);
  }

  move2ToCasual() {
    const temTpl = this.firstContain?.detach(1);
    this.secondContainer?.insert(temTpl!);
  }
}
