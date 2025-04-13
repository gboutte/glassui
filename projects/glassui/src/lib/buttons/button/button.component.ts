import {Component, Input} from '@angular/core';
import {Color} from "../../shared/color.type";
import { NgClass } from '@angular/common';

@Component({
    selector: 'gl-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    imports: [NgClass]
})
export class ButtonComponent {

  @Input() color:Color = "white";
  @Input() round:boolean = false;

  getClasses() {
    return `${this.color} ${this.round ? 'round-icon' : ''}`;
  }
}
