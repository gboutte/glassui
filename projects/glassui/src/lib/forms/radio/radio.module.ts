import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioComponent} from './radio/radio.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RadioComponent
    ],
    exports: [
        RadioComponent
    ]
})
export class RadioModule {
}
