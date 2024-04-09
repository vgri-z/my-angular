import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertWrapperComponent } from './alert-wrapper/alert-wrapper.component';
import { AlertComponent } from './alert/alert.component';
import { CasualComponent } from './casual/casual.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { ChangeFirstComponent } from './change-detection/change-first/change-first.component';
import { ChangeSecondComponent } from './change-detection/change-second/change-second.component';
import { ContentChildComponent } from './content-child/content-child.component';
import { GrandContentComponent } from './content-child/grand-content/grand-content.component';
import { CpnStyleComponent } from './cpn-style/cpn-style.component';
import { ExampleZippyComponent } from './example-zippy/example-zippy.component';
import { ForComponent } from './for/for.component';
import { IfComponent } from './if/if.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ReviewCasualComponent } from './review/review-casual/review-casual.component';
import { ReviewComponent } from './review/review.component';
import { SizerComponent } from './sizer/sizer.component';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { SwitchComponent } from './switch/switch.component';
import { TplContainerComponent } from './tpl-container/tpl-container.component';
import { TplContentComponent } from './tpl-content/tpl-content.component';
import { TplOperatorsComponent } from './tpl-operators/tpl-operators.component';
import { TplOutletComponent } from './tpl-outlet/tpl-outlet.component';
import { TplVarComponent } from './tpl-var/tpl-var.component';
import { VgriPipeComponent } from './vgri-pipe/vgri-pipe.component';
import { GrandChildComponent } from './view-child/grand-child/grand-child.component';
import { ViewChildComponent } from './view-child/view-child.component';
import { FormsModule } from '@angular/forms';
import { PipeModule } from '../pipe/pipe.module';
import { DirectiveModule } from '../directives/directive.module';
import { ShareModule } from '../share/share.module';

const cpnDeclarations = [
  CasualComponent,
  SizerComponent,
  IfComponent,
  SwitchComponent,
  ForComponent,
  TplVarComponent,
  TplOperatorsComponent,
  StructuralDirectivesComponent,
  ReviewComponent,
  TplContainerComponent,
  TplOutletComponent,
  TplContentComponent,
  ViewChildComponent,
  GrandChildComponent,
  ContentChildComponent,
  GrandContentComponent,
  ReviewCasualComponent,
  ExampleZippyComponent,
  VgriPipeComponent,
  LifeCycleComponent,
  ChangeDetectionComponent,
  ChangeFirstComponent,
  ChangeSecondComponent,
  CpnStyleComponent,
  AlertComponent,
  AlertWrapperComponent,
];

@NgModule({
  declarations: cpnDeclarations,
  imports: [
    CommonModule,
    FormsModule,
    PipeModule,
    DirectiveModule,
    ShareModule,
  ],
  exports: cpnDeclarations,
})
export class ComponentsModule {}
