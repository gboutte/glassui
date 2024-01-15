import { Component } from '@angular/core';
import {ToastService} from "../../../../../../glassui/src/lib/toast/toast.service";
import {Color} from "../../../../../../glassui/src/lib/shared/color.type";

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

  alert(color:Color, title:string, description:string,icon:'success'|'error'|'info'|undefined = undefined) {
    this.toastService.alert({
      color: color,
      title: title,
      description: description,
      icon: icon
    });
  }
}
