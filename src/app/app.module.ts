import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CasualComponent } from './casual/casual.component';
import { DialogModule } from 'primeng/dialog';
import { SizerComponent } from './sizer/sizer.component';
import { FormsModule } from '@angular/forms';
import { IfComponent } from './if/if.component';
import { SwitchComponent } from './switch/switch.component';
import { ForComponent } from './for/for.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { TplVarComponent } from './tpl-var/tpl-var.component';
import { TplOperatorsComponent } from './tpl-operators/tpl-operators.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDirective } from './directives/review.directive';
import { UnlessDirective } from './directives/unless.directive';
import { TplContainerComponent } from './tpl-container/tpl-container.component';
import { TplOutletComponent } from './tpl-outlet/tpl-outlet.component';
import { TplContentComponent } from './tpl-content/tpl-content.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { GrandChildComponent } from './view-child/grand-child/grand-child.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { GrandContentComponent } from './content-child/grand-content/grand-content.component';
import { ReviewCasualComponent } from './review/review-casual/review-casual.component';
import { ExampleZippyComponent } from './example-zippy/example-zippy.component';
import { ZippyContentDirective } from './directives/example-zippy-content.directive';
import { VgriPipeComponent } from './vgri-pipe/vgri-pipe.component';
import { ExponentialStrengthPipe } from './pipe/exponential-strength.pipe';
import { FlyingHeroesPipe } from './pipe/flying-heroes.pipe';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ChangeFirstComponent } from './change-detection/change-first/change-first.component';
import { ChangeSecondComponent } from './change-detection/change-second/change-second.component';
import { CpnStyleComponent } from './cpn-style/cpn-style.component';
import { AlertComponent } from './alert/alert.component';
import { AlertWrapperComponent } from './alert-wrapper/alert-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    CasualComponent,
    SizerComponent,
    IfComponent,
    SwitchComponent,
    ForComponent,
    TplVarComponent,
    TplOperatorsComponent,
    HighlightDirective,
    StructuralDirectivesComponent,
    ReviewComponent,
    ReviewDirective,
    UnlessDirective,
    TplContainerComponent,
    TplOutletComponent,
    TplContentComponent,
    ViewChildComponent,
    GrandChildComponent,
    ContentChildComponent,
    GrandContentComponent,
    ReviewCasualComponent,
    ExampleZippyComponent,
    ZippyContentDirective,
    VgriPipeComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    LifeCycleComponent,
    ChangeDetectionComponent,
    ChangeFirstComponent,
    ChangeSecondComponent,
    CpnStyleComponent,
    AlertComponent,
    AlertWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
    InputNumberModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
