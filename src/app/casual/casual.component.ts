import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-casual',
  templateUrl: './casual.component.html',
  styleUrl: './casual.component.less',
})
export class CasualComponent {
  // titleClick(event: MouseEvent, title: string) {
  //   console.log(title, 'title click', event);
  // }

  // wrapperClick() {
  //   console.log('wrapper click');
  // }

  // innerClick(event: MouseEvent) {
  //   event.stopPropagation();
  //   console.log('inner click');
  // }

  // inputDown(event: KeyboardEvent) {
  //   setTimeout(() => {
  //     console.log((event.target as HTMLInputElement).value);
  //   });
  // }
  @Input() visible = false;
  @Input() title = '';
  @Input() confirmText = '确定';
  @Input() cancelText = '取消';
  @Output() closed = new EventEmitter<string>();
  @Output() sure = new EventEmitter<void>();

  confirm(name: string) {
    this.closed.emit(name);
  }
  cancel() {
    this.sure.emit();
  }
}
