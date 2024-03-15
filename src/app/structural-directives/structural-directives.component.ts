import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrl: './structural-directives.component.less',
})
export class StructuralDirectivesComponent {
  show = true;

  isShow = false;

  bookName = '兄弟';

  books = ['活着', '边城', 'vgris', '朱必全'];

  trackByFunction(index: number, item: string): string {
    return item;
  }
}
