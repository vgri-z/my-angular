import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-life-cycle',
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.less',
})
export class LifeCycleComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  constructor() {
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    // 输入属性发生变化时调用
    console.log('on changes');
  }

  ngOnInit(): void {
    console.log('on init');
  }

  ngDoCheck(): void {
    // 每当发生变更检测的时候，doCheck afterContentCheck afterViewCheck三个生命周期函数都是一起执行的
    console.log('do check');
  }

  ngAfterContentInit(): void {
    console.log('after content init');
  }

  ngAfterContentChecked(): void {
    console.log('after content checked');
  }

  ngAfterViewInit(): void {
    console.log('after view inti');
  }

  ngAfterViewChecked(): void {
    console.log('after view checked');
  }

  ngOnDestroy(): void {
    // 组件销毁调用
    console.log('on destroy');
  }
}
