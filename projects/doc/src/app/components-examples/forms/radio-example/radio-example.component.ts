import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from "@angular/forms";
import { RadioComponent } from '../../../../../../glassui/src/lib/forms/radio/radio/radio.component';
import { CardComponent } from '../../../../../../glassui/src/lib/content/card/card.component';
import { ButtonComponent } from '../../../../../../glassui/src/lib/buttons/button/button.component';

@Component({
    selector: 'gd-radio-example',
    templateUrl: './radio-example.component.html',
    styleUrls: ['./radio-example.component.scss'],
    imports: [RadioComponent, ReactiveFormsModule, FormsModule, CardComponent, ButtonComponent]
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
