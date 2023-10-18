import {Component, Input} from '@angular/core';

@Component({
  selector: 'gl-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() color: "white"| "red" | "blue" | "green" | "yellow" | "purple" | "orange" | "gray" | "cyan" = "white";
  @Input() transparency: "25"|"50"|"75" = "25";

  getClasses() {
    return `${this.color} transparency-${this.transparency}`;
  }
}
