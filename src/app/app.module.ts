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
import { TplVarComponent } from './tpl-var/tpl-var.component';
import { TplOperatorsComponent } from './tpl-operators/tpl-operators.component';
import { HighlightDirective } from './directives/highlight.directive';
import { StructuralDirectivesComponent } from './structural-directives/structural-directives.component';
import { ReviewComponent } from './review/review.component';
import { ReviewDirective } from './directives/review.directive';
import { UnlessDirective } from './directives/unless.directive';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    InputTextModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
