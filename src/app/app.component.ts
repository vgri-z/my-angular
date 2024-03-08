import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {
  title = 'my-angular';
  isPass = false;

  logo = 'https://angular.cn/assets/images/logos/angular/logo-nav@2x.png';
  logoName = 'angular';
  isDisabled = false;

  multipleClass1 = 'mul-title1 vgri1';
  multipleClass2 = ['mul-title2', 'vgri2'];
  multipleClass3 = {
    'mul-title3': true,
    vgri3: true,
  };

  multipleStyles1 = 'width: 100px; height: 100px; background-color: red;';
  multipleStyles3 = {
    width: '100px',
    height: '100px',
    backgroundColor: '#008c8c',
  };

  changeBgColor() {
    // this.multipleStyles3.backgroundColor = '#1e88e5';
    this.multipleStyles3 = {
      width: '100px',
      height: '100px',
      backgroundColor: '#1e88e5',
    };
  }

  get name() {
    return 'vgri';
  }
  getAge(): number {
    return 12;
  }

  isShow = false;

  show() {}

  onClosed(name: string) {
    console.log(name);
    this.isShow = false;
  }

  onSure() {
    console.log('sure');
    this.isShow = false;
  }

  size = 16;
}
