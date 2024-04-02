import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-change-second',
  templateUrl: './change-second.component.html',
  styleUrl: './change-second.component.less',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChangeSecondComponent implements OnInit, OnChanges {
  @Input() job: 'teacher' | 'doctor' = 'teacher';
  name = 'vgri';

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.name = 'vae';
      // onPush策略下，setTimeout是不触发变更检测的，所以为了能让setTimeout能触发变更检测，就需要显示调用变更检测方法
      // this.cdr.markForCheck(); // 将这个组件标记为脏的，下一次变更检测的时候，顺带检测该组件
      this.cdr.detectChanges(); // 强行触发一次变更检测，但是只检测该组件以及该组件以下的子组件(局部检测)
      // 优先使用markForCheck进行标记
    }, 2000);
  }
}
