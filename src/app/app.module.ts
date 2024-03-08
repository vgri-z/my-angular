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

@NgModule({
  declarations: [AppComponent, CasualComponent, SizerComponent, IfComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
