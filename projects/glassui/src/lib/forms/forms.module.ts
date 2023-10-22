import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputsModule} from "./inputs/inputs.module";


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputsModule,
  ],
  exports: [
    InputsModule,
  ]
})
export class FormsModule {
}
