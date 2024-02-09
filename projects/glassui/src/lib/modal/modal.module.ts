import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModalComponent} from './components/modal/modal.component';
import {ModalService} from "./modal.service";
import {ModalConfirmComponent} from './components/modal-confirm/modal-confirm.component';
import {ButtonsModule} from "../buttons/buttons.module";

@NgModule({
  declarations: [
    ModalComponent,
    ModalConfirmComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  providers: [
    ModalService,
  ],
})
export class ModalModule {
}
