import { NgModule } from '@angular/core';
import {ButtonsModule} from "./buttons/buttons.module";
import {NavigationModule} from "./navigation/navigation.module";



@NgModule({
  declarations: [
  ],
  imports: [
    ButtonsModule,
    NavigationModule,
  ],
  exports: [
    ButtonsModule,
    NavigationModule,
  ]
})
export class GlassuiModule { }
