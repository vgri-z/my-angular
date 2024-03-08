import { Component, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-if',
  templateUrl: './if.component.html',
  styleUrl: './if.component.less',
})
export class IfComponent {
  elseBlock: TemplateRef<any> | undefined = undefined;
  @ViewChild('otherBlock', { static: true })
  private otherBlock: TemplateRef<any> | undefined = undefined;
  isShow = true;

  ngOnInit() {
    this.elseBlock = this.otherBlock;
  }
}
