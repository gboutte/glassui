import { Component, inject } from '@angular/core';
import {ToastService} from "../../../../../../glassui/src/lib/toast/toast.service";
import {Color} from "../../../../../../glassui/src/lib/shared/color.type";
import { ButtonComponent } from '../../../../../../glassui/src/lib/buttons/button/button.component';

@Component({
    selector: 'gd-toast-example',
    templateUrl: './toast-example.component.html',
    styleUrls: ['./toast-example.component.scss'],
    imports: [ButtonComponent]
})
export class ToastExampleComponent {

  private toastService: ToastService;
  constructor() {
    const toastService = inject(ToastService);

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
