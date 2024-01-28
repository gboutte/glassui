import {Component} from '@angular/core';
import {ModalConfig} from "../../modal-config";
import {ModalConfirmConfig} from "../../modal-confirm-config";
import {ModalRef} from "../../modal-ref";

@Component({
  selector: 'gl-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent {
  confirmConfig: ModalConfirmConfig;

  constructor
  (
    protected modalConfig: ModalConfig,
    protected modalRef: ModalRef,
  ) {
    this.confirmConfig = this.modalConfig.data.confirmData
  }
}
