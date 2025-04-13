import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'gd-input-validation-example',
    templateUrl: './input-validation-example.component.html',
    styleUrls: ['./input-validation-example.component.scss'],
    standalone: false
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
