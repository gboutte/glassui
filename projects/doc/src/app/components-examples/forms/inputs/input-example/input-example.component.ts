import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InputComponent } from '../../../../../../../glassui/src/lib/forms/inputs/input/input.component';
import { CardComponent } from '../../../../../../../glassui/src/lib/content/card/card.component';

@Component({
    selector: 'gd-input-example',
    templateUrl: './input-example.component.html',
    styleUrls: ['./input-example.component.scss'],
    imports: [InputComponent, ReactiveFormsModule, FormsModule, CardComponent]
})
export class InputExampleComponent {
  inputValue = 'Input value';

  formControlInputValue = new FormControl('Form control input value');
  constructor() {
    this.formControlInputValue.disable();
  }
}
