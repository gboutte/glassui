import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SelectComponent
    ],
    exports: [
        SelectComponent,
    ]
})
export class SelectsModule { }
