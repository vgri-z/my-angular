import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';
import { BigAgePipe } from './big-age.pipe';

@NgModule({
  declarations: [ExponentialStrengthPipe, FlyingHeroesPipe, BigAgePipe],
  imports: [CommonModule],
  exports: [ExponentialStrengthPipe, FlyingHeroesPipe, BigAgePipe],
})
export class PipeModule {}
