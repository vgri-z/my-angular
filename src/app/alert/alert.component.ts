import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

export interface IAlertOptions {
  content: string;
  type?: string;
}

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Output() close = new EventEmitter<void>();
  options: Required<IAlertOptions> = {
    content: 'this is a new',
    type: 'primary',
  };

  get alertClass() {
    return `alert ${this.options.type}`;
  }

  setOptions = (alertOptions: IAlertOptions) => {
    this.options = { ...this.options, ...alertOptions };
  };
}
