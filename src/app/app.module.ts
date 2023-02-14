import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DemoComponent } from './component/demo/demo.component';
import { ShareModule } from './shares/share/share.module';
import { NarBarComponent } from './component/nar-bar/nar-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    NarBarComponent,
  ],
  imports: [

    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
