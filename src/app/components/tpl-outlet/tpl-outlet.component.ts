import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tpl-outlet',
  templateUrl: './tpl-outlet.component.html',
  styleUrl: './tpl-outlet.component.less',
})
export class TplOutletComponent {
  @Input() renderTpl: TemplateRef<any> | undefined;

  myContext = {
    $implicit: 'default-value',
    name: 'vgri',
  };

  show = false;
}
