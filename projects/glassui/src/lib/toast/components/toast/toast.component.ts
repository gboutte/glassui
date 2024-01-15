import {Component, Input} from '@angular/core';
import {Color} from "../../../shared/color.type";

@Component({
  selector: 'gl-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
})
export class ToastComponent {
  @Input() color: Color = 'green';

  @Input() title!: string;
  @Input() description!: string;
  @Input() icon: string|null = null;
}
