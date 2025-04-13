import {Component, OnInit} from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule } from "@angular/forms";
import { CheckboxComponent } from '../../../../../../../glassui/src/lib/forms/checkbox/checkbox/checkbox.component';
import { ButtonComponent } from '../../../../../../../glassui/src/lib/buttons/button/button.component';

@Component({
    selector: 'gd-checkbox-validation-example',
    templateUrl: './checkbox-validation-example.component.html',
    styleUrls: ['./checkbox-validation-example.component.scss'],
    imports: [CheckboxComponent, ReactiveFormsModule, ButtonComponent]
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
