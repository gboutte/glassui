import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GlassuiModule} from "../../../glassui/src/lib/glassui.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GlassuiModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
