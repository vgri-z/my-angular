import { Component, EventEmitter, Output } from '@angular/core';

export interface IAlertOption {
  message: string;
  type?: string;
}

@Component({
  selector: 'app-review-casual',
  templateUrl: './review-casual.component.html',
  styleUrl: './review-casual.component.less',
})
export class ReviewCasualComponent {
  @Output() close = new EventEmitter<void>();

  get alertClass(): string {
    return `alert ${this.options.type}`;
  }

  // required作用就是尽管IAlertOption中有可选参数，但是有Required，那也是必传的
  options: Required<IAlertOption> = {
    message: '这是一条消息',
    type: 'success',
  };

  setOptions = (options: IAlertOption) => {
    this.options = { ...this.options, ...options };
  };
}
