import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrl: './change-detection.component.less',
})
export class ChangeDetectionComponent implements OnInit {
  personName = 'vgri';
  @Input() title = 'default title';

  constructor(private cdr: ChangeDetectorRef) {
    // setTimeout(() => {
    //   this.personName = 'vae';
    // }, 2000);
  }

  ngOnInit(): void {
    // this.cdr.detach(); // 将视图从变更检测树中分离出来 分离出来的视图会跳过变更检测
  }
}
