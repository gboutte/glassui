import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckboxComponent } from './checkbox/checkbox.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        CheckboxComponent
    ],
    exports: [
        CheckboxComponent
    ]
})
export class CheckboxModule { }
