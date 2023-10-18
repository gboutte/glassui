import { NgModule } from '@angular/core';
import {ButtonsModule} from "./buttons/buttons.module";
import {NavigationModule} from "./navigation/navigation.module";
import {ContentModule} from "./content/content.module";



@NgModule({
  declarations: [
  ],
  imports: [
    ButtonsModule,
    NavigationModule,
    ContentModule,
  ],
  exports: [
    ButtonsModule,
    NavigationModule,
    ContentModule,
  ]
})
export class GlassuiModule { }
