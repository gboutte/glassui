import {Component, Input} from '@angular/core';
import {Color} from "../../shared/color.type";

@Component({
  selector: 'gl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() color:Color = "white";
  @Input() transparency: "25"|"50"|"75" = "25";
  @Input() blur: "4"|"8"|"12"|"16" = "4";

  getClasses() {
    return `${this.color} transparency-${this.transparency} blur-${this.blur}`;
  }
}
