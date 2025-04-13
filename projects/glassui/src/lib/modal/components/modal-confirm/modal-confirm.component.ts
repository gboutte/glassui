import { Component, inject } from '@angular/core';
import {ModalConfig} from "../../modal-config";
import {ModalConfirmConfig} from "../../modal-confirm-config";
import {ModalRef} from "../../modal-ref";
import { ButtonComponent } from '../../../buttons/button/button.component';

@Component({
    selector: 'gl-modal-confirm',
    templateUrl: './modal-confirm.component.html',
    styleUrls: ['./modal-confirm.component.scss'],
    imports: [ButtonComponent]
})
export class ModalConfirmComponent {
  protected modalConfig = inject(ModalConfig);
  protected modalRef = inject(ModalRef);

  confirmConfig: ModalConfirmConfig;

  constructor
  () {
    this.confirmConfig = this.modalConfig.data.confirmData
  }
}
