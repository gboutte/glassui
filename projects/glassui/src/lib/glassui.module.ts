import { NgModule } from '@angular/core';
import {ButtonsModule} from "./buttons/buttons.module";
import {NavigationModule} from "./navigation/navigation.module";
import {ContentModule} from "./content/content.module";
import {FormsModule} from "./forms/forms.module";
import {ToastModule} from "./toast/toast.module";
import {ModalModule} from "./modal/modal.module";



@NgModule({
  declarations: [
  ],
  imports: [
    ButtonsModule,
    NavigationModule,
    ContentModule,
    FormsModule,
    ToastModule,
    ModalModule,
  ],
  exports: [
    ButtonsModule,
    NavigationModule,
    ContentModule,
    FormsModule,
    ToastModule,
    ModalModule,
  ]
})
export class GlassuiModule { }
