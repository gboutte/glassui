import { Component } from '@angular/core';
import {ToastService} from "../../../../../../glassui/src/lib/toast/toast.service";

@Component({
  selector: 'gd-toast-example',
  templateUrl: './toast-example.component.html',
  styleUrls: ['./toast-example.component.scss']
})
export class ToastExampleComponent {

  private toastService: ToastService;
  constructor(toastService: ToastService) {
    this.toastService = toastService;
  }

  alert() {
    this.toastService.alert("green", "Title", "Description");
  }
}
