import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputsModule} from "./inputs/inputs.module";
import {SelectsModule} from "./selects/selects.module";
import {CheckboxModule} from "./checkbox/checkbox.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InputsModule,
    SelectsModule,
    CheckboxModule,
  ],
  exports: [
    InputsModule,
    SelectsModule,
    CheckboxModule,
  ]
})
export class FormsModule {
}
