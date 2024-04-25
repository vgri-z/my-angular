import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { RadioButtonModule } from 'primeng/radiobutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DialogModule,
    RadioButtonModule,
  ],
  exports: [
    ButtonModule,
    InputTextModule,
    InputNumberModule,
    DialogModule,
    RadioButtonModule,
  ],
})
export class ShareModule {}
