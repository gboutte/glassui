import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
    selector: 'gd-radio-example',
    templateUrl: './radio-example.component.html',
    styleUrls: ['./radio-example.component.scss'],
    standalone: false
})
export class RadioExampleComponent {

  inputValue = 'red';

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
