import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputsModule} from "./inputs/inputs.module";
import {SelectsModule} from "./selects/selects.module";
import {CheckboxModule} from "./checkbox/checkbox.module";
import {RadioModule} from "./radio/radio.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InputsModule,
    SelectsModule,
    CheckboxModule,
    RadioModule,
  ],
  exports: [
    InputsModule,
    SelectsModule,
    CheckboxModule,
    RadioModule,
  ]
})
export class FormsModule {
}
