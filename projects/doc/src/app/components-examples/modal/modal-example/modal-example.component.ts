import { Component } from '@angular/core';
import {ModalService} from "../../../../../../glassui/src/lib/modal/modal.service";
import {ModalConfig} from "../../../../../../glassui/src/lib/modal/modal-config";

@Component({
  selector: 'gd-modal-example',
  templateUrl: './modal-example.component.html',
  styleUrls: ['./modal-example.component.scss']
})
export class ModalExampleComponent {
  private modalService:ModalService;
  data:string = "My data";
  constructor(modalService:ModalService) {
    this.modalService = modalService;
  }

  open() {
    this.modalService.open(ContentExampleComponent);
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
  template: 'My content',
})
export class ContentExampleComponent {
  constructor() {
  }
}

@Component({
  selector: 'gd-content-example-with-data',
  template: 'Data: {{textContent}}',
})
export class ContentExampleWithDataComponent {
  textContent:string;
  constructor(private modalConfig: ModalConfig) {
    this.textContent = modalConfig.data.text;
    modalConfig.title = "A simple title"; // You can also change modal config here
    modalConfig.cssClasses?.push("my-custom-class"); // You can also add css classes here
  }
}
