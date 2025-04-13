import {Component, OnInit} from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { InputComponent } from '../../../../../../../glassui/src/lib/forms/inputs/input/input.component';
import { ButtonComponent } from '../../../../../../../glassui/src/lib/buttons/button/button.component';

@Component({
    selector: 'gd-input-validation-example',
    templateUrl: './input-validation-example.component.html',
    styleUrls: ['./input-validation-example.component.scss'],
    imports: [InputComponent, ReactiveFormsModule, ButtonComponent]
})
export class InputValidationExampleComponent {
  inputWithRequired: FormControl = new FormControl('', Validators.required);
  inputMarkedInvalid: FormControl = new FormControl('');
  inputShowError: FormControl = new FormControl('');

  markAsInvalid() {
    this.inputMarkedInvalid.setErrors({invalid: true});
    this.inputShowError.setErrors({myError: "This is my error", anotherError: "This is another error"});
    this.inputWithRequired.updateValueAndValidity();
  }

  markAsValid() {
    this.inputMarkedInvalid.updateValueAndValidity();
    this.inputShowError.updateValueAndValidity();
  }
}
