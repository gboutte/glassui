import {Component, Input} from '@angular/core';
import {Color} from "../../shared/color.type";

@Component({
  selector: 'gl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() color:Color = "white";

  getClasses() {
    return `${this.color}`;
  }
}
