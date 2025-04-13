import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";

@Component({
    selector: 'gd-checkbox-validation-example',
    templateUrl: './checkbox-validation-example.component.html',
    styleUrls: ['./checkbox-validation-example.component.scss'],
    standalone: false
})
export class CheckboxValidationExampleComponent {
  inputWithRequired: FormControl = new FormControl('', Validators.requiredTrue);
  inputMarkedInvalid: FormControl = new FormControl('');
  inputShowError: FormControl = new FormControl('');

  markAsInvalid() {
    this.inputMarkedInvalid.setErrors({invalid: true});
    this.inputShowError.setErrors({myError: "This is my error", anotherError: "This is another error"});
  }

  markAsValid() {
    this.inputMarkedInvalid.updateValueAndValidity();
    this.inputShowError.updateValueAndValidity();
  }
}
