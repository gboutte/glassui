import {Component, Input} from '@angular/core';
import {Color} from "../../shared/color.type";

@Component({
    selector: 'gl-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: false
})
export class ButtonComponent {

  @Input() color:Color = "white";
  @Input() round:boolean = false;

  getClasses() {
    return `${this.color} ${this.round ? 'round-icon' : ''}`;
  }
}
