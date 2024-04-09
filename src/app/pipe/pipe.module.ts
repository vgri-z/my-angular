import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialStrengthPipe } from './exponential-strength.pipe';
import { FlyingHeroesPipe } from './flying-heroes.pipe';

@NgModule({
  declarations: [ExponentialStrengthPipe, FlyingHeroesPipe],
  imports: [CommonModule],
  exports: [ExponentialStrengthPipe, FlyingHeroesPipe],
})
export class PipeModule {}
