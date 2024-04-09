import {
  AfterViewInit,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  OnInit,
  QueryList,
} from '@angular/core';
import { ReviewCasualComponent } from './review-casual/review-casual.component';
import { HighlightDirective } from '../directives/highlight.directive';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.less',
})
export class ReviewComponent implements OnInit, AfterViewInit {
  // ContentChild获取目标的话，若名称相同，只会获取到第一个
  @ContentChild('title', { static: true }) titleEl: ElementRef | undefined;
  @ContentChild(ReviewCasualComponent, { static: true }) rc:
    | ReviewCasualComponent
    | undefined;
  @ContentChild(HighlightDirective, { static: true }) highLight:
    | HighlightDirective
    | undefined;
  @ContentChild('reviewCasual', { static: true }) rcasual:
    | ReviewCasualComponent
    | undefined;
  @ContentChildren('title', { descendants: true }) titleEls:
    | QueryList<ElementRef>
    | undefined;
  @ContentChildren(HighlightDirective, { descendants: true }) hls:
    | QueryList<HighlightDirective>
    | undefined;
  @ContentChildren(ReviewCasualComponent, { descendants: true }) rcs:
    | QueryList<ReviewCasualComponent>
    | undefined;
  @ContentChildren('reviewCasual', { descendants: true }) rcasuals:
    | QueryList<ReviewCasualComponent>
    | undefined;

  ngOnInit(): void {
    // console.log(this.titleEl);
    // console.log(this.rc);
    // this.rc?.sayHello();
    // this.highLight?.highLight('lime');
    console.log(this.rcasual);
  }

  ngAfterViewInit(): void {
    // console.log(this.titleEl);
    // console.log(this.rc);
    // console.log(this.titleEls);
    // console.log(this.hls?.length);
    // console.log(this.rcs);
    console.log(this.rcasual);
    console.log(this.rcasuals);
  }
}
