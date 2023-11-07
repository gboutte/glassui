import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import {ContentModule} from "../content/content.module";
import {ToastService} from "./toast.service";



@NgModule({
  declarations: [
    ToastComponent
  ],
  imports: [
    CommonModule,
    ContentModule
  ],
  providers: [
    ToastService,
  ],
  exports: [
    ToastComponent,
  ]
})
export class ToastModule { }
