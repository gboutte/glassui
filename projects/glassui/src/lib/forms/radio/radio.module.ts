import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RadioComponent} from './radio/radio.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    RadioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    RadioComponent
  ]
})
export class RadioModule {
}
