import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        InputComponent
    ],
    exports: [
        InputComponent
    ]
})
export class InputsModule { }
