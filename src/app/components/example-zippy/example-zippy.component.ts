import {
  AfterViewInit,
  Component,
  ContentChild,
  ElementRef,
  TemplateRef,
} from '@angular/core';
import { ZippyContentDirective } from '../directives/example-zippy-content.directive';
import { ReviewCasualComponent } from '../review/review-casual/review-casual.component';

@Component({
  selector: 'app-example-zippy',
  templateUrl: './example-zippy.component.html',
  styleUrl: './example-zippy.component.less',
})
export class ExampleZippyComponent implements AfterViewInit {
  @ContentChild(ZippyContentDirective) content!: ZippyContentDirective;
  @ContentChild('title', { static: true }) titleEl: ElementRef | undefined;
  @ContentChild(ReviewCasualComponent, { static: true }) rc:
    | ReviewCasualComponent
    | undefined;
  @ContentChild('temTpl', { static: true }) temTpl:
    | TemplateRef<any>
    | undefined;

  expanded = true;
  contentId = '';

  ngAfterViewInit(): void {
    // console.log(this.content.templateRef);
    // console.log(this.titleEl);
    // console.log(this.rc);
    // this.rc?.sayHello();
  }
}
