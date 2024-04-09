import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZippyContentDirective } from './example-zippy-content.directive';
import { HighlightDirective } from './highlight.directive';
import { ReviewDirective } from './review.directive';
import { UnlessDirective } from './unless.directive';

@NgModule({
  declarations: [
    ReviewDirective,
    UnlessDirective,
    HighlightDirective,
    ZippyContentDirective,
  ],
  imports: [CommonModule],
  exports: [
    ReviewDirective,
    UnlessDirective,
    HighlightDirective,
    ZippyContentDirective,
  ],
})
export class DirectiveModule {}
