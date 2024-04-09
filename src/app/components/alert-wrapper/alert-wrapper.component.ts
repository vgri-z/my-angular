import {
  ApplicationRef,
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injector,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-alert-wrapper',
  templateUrl: './alert-wrapper.component.html',
  styles: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertWrapperComponent {
  private container: AlertComponent | undefined;
  private componentRef: ComponentRef<AlertComponent> | undefined;

  constructor(
    private cfr: ComponentFactoryResolver,
    private containerRef: ViewContainerRef,
    private inject: Injector,
    private appRef: ApplicationRef
  ) {}

  showAlert = () => {
    if (!this.container) {
      this.container = this.getContainer();
    }
    this.container.setOptions({ content: '只是一条消息', type: 'danger' });
  };

  getContainer(): AlertComponent {
    // V13之前的写法
    // 1.
    // const factory =
    //   this.cfr.resolveComponentFactory<AlertComponent>(AlertComponent);

    // 2.
    // this.componentRef = factory.create(this.inject);

    // 3.
    // this.appRef.attachView(this.componentRef.hostView);

    // 4.
    // document.body.appendChild(
    //   (this.componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0]
    // );

    // 以上的1 2 3 4步都直接简化成下面的第五种写法，一步到位

    // this.componentRef.onDestroy(() => {
    //   console.log('cpn destroy');
    // });

    // const instance = this.componentRef.instance;

    // instance.close.subscribe((res) => {
    //   this.componentRef?.destroy();
    //   this.container = undefined;
    // });

    // angular更新之后 直接使用ViewContainerRef的createComponent创建组件实例，不需要使用ComponentFactoryResolver来创建组件工厂了
    // ComponentFactoryResolver自angular13开始就已经废弃了
    // 直接创建一个组件实例,并把这个组件实例添加到视图容器当中
    // 除了前面几步简化了之外，其余的和之前的写法一样
    // 5.
    this.componentRef =
      this.containerRef.createComponent<AlertComponent>(AlertComponent);

    this.componentRef.onDestroy(() => {
      console.log('cpn destroy');
    });

    const instance = this.componentRef.instance;

    instance.close.subscribe((res) => {
      this.componentRef?.destroy();
      this.container = undefined;
    });

    return instance;
  }
}
