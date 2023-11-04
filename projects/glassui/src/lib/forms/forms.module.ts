import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputsModule} from "./inputs/inputs.module";
import {SelectsModule} from "./selects/selects.module";


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    InputsModule,
    SelectsModule,
  ],
  exports: [
    InputsModule,
    SelectsModule,
  ]
})
export class FormsModule {
}
