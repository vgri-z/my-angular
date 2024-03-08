import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sizer',
  templateUrl: './sizer.component.html',
  styleUrl: './sizer.component.less',
})
export class SizerComponent {
  @Input() size = 16;
  @Output() sizeChange = new EventEmitter<number>();

  inc() {
    // this.resize(1);
    this.sizeChange.emit(this.size + 1);
  }

  dec() {
    // this.resize(-1);
    this.sizeChange.emit(this.size - 1);
  }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  inputValue = '';

  inputChange(event: Event) {
    this.inputValue = (event.target as HTMLInputElement).value;
  }
}
