import { Component, inject } from '@angular/core';
import {ModalService} from "../../../../../../glassui/src/lib/modal/modal.service";
import {ModalConfig} from "../../../../../../glassui/src/lib/modal/modal-config";
import { ButtonComponent } from '../../../../../../glassui/src/lib/buttons/button/button.component';
import { InputComponent } from '../../../../../../glassui/src/lib/forms/inputs/input/input.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@Component({
    selector: 'gd-modal-example',
    templateUrl: './modal-example.component.html',
    styleUrls: ['./modal-example.component.scss'],
    imports: [ButtonComponent, InputComponent, ReactiveFormsModule, FormsModule]
})
export class ModalExampleComponent {
  private modalService:ModalService;
  data:string = "My data";
  constructor() {
    const modalService = inject(ModalService);

    this.modalService = modalService;
  }

  open() {
    this.modalService.open(ContentExampleComponent);
  }
  openConfirm() {
    this.modalService.confirm('Are you sure?', 'This action cannot be undone.').subscribe((result) => {
      console.log('Result of confirm:',result);
    });
  }

  openWithData() {
    this.modalService.open(ContentExampleWithDataComponent, {
      data: {text: this.data},
      title: "My title defined in config" //You can define modal config here
    });
  }

}

@Component({
    selector: 'gd-content-example',
    template: 'My content'
})
export class ContentExampleComponent {
  constructor() {
  }
}

@Component({
    selector: 'gd-content-example-with-data',
    template: 'Data: {{textContent}}'
})
export class ContentExampleWithDataComponent {
  private modalConfig = inject(ModalConfig);

  textContent:string;
  constructor() {
    const modalConfig = this.modalConfig;

    this.textContent = modalConfig.data.text;
    modalConfig.title = "A simple title"; // You can also change modal config here
    modalConfig.cssClasses?.push("my-custom-class"); // You can also add css classes here
  }
}
