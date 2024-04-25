import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.less',
})
export class ViewChildComponent implements OnInit, AfterViewInit {
  // 当一段内容在初始化的时候就会显示在页面上，后续不会使用ngIf对其进行操作，这时就可以开启static属性
  @ViewChild('wrapper', { static: true }) readonly wrapperEl:
    | ElementRef<HTMLElement>
    | undefined;
  @ViewChild(GrandChildComponent, { static: true }) casualCpn:
    | GrandChildComponent
    | undefined;
  @ViewChild('grandChild', { static: true }) grandCpn:
    | GrandChildComponent
    | undefined;

  @ViewChildren('wrapper') wrapperEls: QueryList<HTMLElement> | undefined;
  @ViewChildren(GrandChildComponent) grandCpns:
    | QueryList<GrandChildComponent>
    | undefined;
  @ViewChildren('grandChild') grandChilds:
    | QueryList<GrandChildComponent>
    | undefined;

  // 获取指令
  @ViewChild(HighlightDirective, { static: true }) highLight:
    | HighlightDirective
    | undefined;
  show = true;

  constructor() {
    // 在constructor中是获取不到元素的
    // console.log(this.wrapperEl, 'constructor');
    // console.log(this.casualCpn);
  }

  ngOnInit(): void {
    // console.log(this.wrapperEl, 'oninti');
    // console.log(this.casualCpn);
    // console.log(this.grandCpn?.name);
    console.log(this.highLight);
    // 一开始进入页面的时候，将指令宿主元素的背景色改成lime
    this.highLight?.highLight('lime');
  }

  ngAfterViewInit(): void {
    // 获取元素，最好是在AfterViewInit生命周期函数中，因为元素的获取，默认会在变更检测之后，AfterViewInit函数就是在变更检测之后才会调用的
    // console.log(this.wrapperEl, 'after view init');
    // console.log(this.casualCpn);
    // console.log(this.grandCpn);
    // this.casualCpn?.printName();
    // console.log(this.wrapperEls);
    // console.log(this.grandCpns?.length);
    // console.log(this.grandCpns?.first);
    // console.log(this.grandChilds);
    // this.grandCpns?.changes.subscribe((changes) => {
    //   console.log(changes);
    // });
  }
}
