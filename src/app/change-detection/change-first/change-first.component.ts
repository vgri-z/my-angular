import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  Input,
  OnChanges,
  SimpleChanges,
  ChangeDetectorRef,
} from '@angular/core';

@Component({
  selector: 'app-change-first',
  templateUrl: './change-first.component.html',
  styleUrl: './change-first.component.less',
})
export class ChangeFirstComponent implements OnInit, OnChanges {
  @Input() title = 'default title';
  @Output() changeName = new EventEmitter<void>();
  constructor(private cdr: ChangeDetectorRef) {}
  age = 18;

  job: 'teacher' | 'doctor' = 'doctor';

  ngOnInit(): void {
    // this.cdr.detach();
    setTimeout(() => {
      // 在一个变更检测周期中 子组件不能直接修改父组件里的数据 违反单项数据流的原则 有可能引发变更检测的循环
      // 可以放进一个定时器中 当执行定时器的代码时 会触发新一轮的变更检测 这个时候就不会报错了
      this.changeName.emit();
    });

    setTimeout(() => {
      this.age = 20;
    }, 2000);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log(changes);
    // this.cdr.reattach(); // 将分离出来的视图重新添加到变更检测树上
    // setTimeout(() => {
    //   // 待变更检测完成之后，将视图重新从变更检测树上分离出来
    //   this.cdr.detach;
    // });
  }
}
