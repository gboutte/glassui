import {Component, Input} from '@angular/core';
import {Color} from "../../shared/color.type";
import { NgClass } from '@angular/common';

@Component({
    selector: 'gl-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [NgClass]
})
export class CardComponent {
  @Input() color:Color = "white";
  @Input() transparency: "25"|"50"|"75" = "25";
  @Input() blur: "small"|"medium"|"big"|"bigger" = "bigger";

  getClasses() {
    return `${this.color} transparency-${this.transparency} blur-${this.blur}`;
  }

}
