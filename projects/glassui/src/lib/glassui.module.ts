import { NgModule } from '@angular/core';
import {ButtonsModule} from "./buttons/buttons.module";
import {NavigationModule} from "./navigation/navigation.module";
import {ContentModule} from "./content/content.module";
import {FormsModule} from "./forms/forms.module";



@NgModule({
  declarations: [
  ],
  imports: [
    ButtonsModule,
    NavigationModule,
    ContentModule,
    FormsModule,
  ],
  exports: [
    ButtonsModule,
    NavigationModule,
    ContentModule,
    FormsModule,
  ]
})
export class GlassuiModule { }
