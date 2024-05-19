import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'gd-input-example',
  templateUrl: './input-example.component.html',
  styleUrls: ['./input-example.component.scss']
})
export class InputExampleComponent {
  inputValue = 'Input value';

  formControlInputValue = new FormControl('Form control input value');
  constructor() {
    this.formControlInputValue.disable();
  }
}
