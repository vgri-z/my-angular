import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  QueryList,
} from '@angular/core';
import { GrandContentComponent } from './grand-content/grand-content.component';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrl: './content-child.component.less',
})
export class ContentChildComponent implements AfterViewInit {
  @ContentChild('inner', { static: true }) innerEl:
    | ElementRef<HTMLElement>
    | undefined;

  @ContentChild(GrandContentComponent, { static: true }) grandCotent:
    | GrandContentComponent
    | undefined;

  @ContentChild('grandChild', { static: true }) grandChild:
    | GrandContentComponent
    | undefined;

  @ContentChild(HighlightDirective, { static: true }) highLight:
    | HighlightDirective
    | undefined;

  // 不管是组件 指令还是dom元素，descendants属性都有作用
  @ContentChildren('inner', { descendants: true }) innerEls:
    | QueryList<ElementRef>
    | undefined;
  @ContentChildren(GrandContentComponent, { descendants: true }) grandCpns:
    | QueryList<GrandContentComponent>
    | undefined;
  @ContentChildren('grandChild') grandChilds:
    | QueryList<GrandContentComponent>
    | undefined;
  @ContentChildren(HighlightDirective) highls:
    | QueryList<HighlightDirective>
    | undefined;
  ngAfterViewInit(): void {
    console.log(this.innerEl);
    // console.log(this.grandCotent?.name);
    // console.log(this.grandChild?.name);
    // this.highLight?.highLight('yellow');
    console.log(this.innerEls);
    console.log(this.grandCpns);
    console.log(this.grandChilds);
    console.log(this.highls);
  }
}
