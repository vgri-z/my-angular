import { Component, ComponentRef, ViewContainerRef } from '@angular/core';
import { ReviewCasualComponent } from './review-casual/review-casual.component';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrl: './review.component.less',
})
export class ReviewComponent {
  private container: ReviewCasualComponent | undefined;
  private componentRef: ComponentRef<ReviewCasualComponent> | undefined;

  constructor(private containerRef: ViewContainerRef) {}

  showMessage() {
    if (!this.container) {
      this.container = this.getContainer();
    }
    const option = {
      message: '动态组件创建成功',
      type: 'danger',
    };
    this.container.setOptions(option);
  }

  getContainer(): ReviewCasualComponent {
    this.componentRef =
      this.containerRef.createComponent<ReviewCasualComponent>(
        ReviewCasualComponent
      );

    // 监听组件的销毁
    this.componentRef.onDestroy(() => {
      console.log('cpn destroy');
    });

    const { instance } = this.componentRef;

    instance.close.subscribe(() => {
      this.componentRef?.destroy();
      this.container = undefined;
    });

    return instance;
  }
}
