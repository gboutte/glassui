import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './components/toast/toast.component';
import {ContentModule} from "../content/content.module";
import {ToastService} from "./toast.service";



@NgModule({
    imports: [
        CommonModule,
        ContentModule,
        ToastComponent
    ],
    providers: [
        ToastService,
    ],
    exports: [
        ToastComponent,
    ]
})
export class ToastModule { }
