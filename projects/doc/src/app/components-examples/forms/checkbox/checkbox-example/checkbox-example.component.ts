import { Component } from '@angular/core';
import { CheckboxComponent } from '../../../../../../../glassui/src/lib/forms/checkbox/checkbox/checkbox.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CardComponent } from '../../../../../../../glassui/src/lib/content/card/card.component';

@Component({
    selector: 'gd-checkbox-example',
    templateUrl: './checkbox-example.component.html',
    styleUrls: ['./checkbox-example.component.scss'],
    imports: [CheckboxComponent, ReactiveFormsModule, FormsModule, CardComponent]
})
export class CheckboxExampleComponent {
  inputValue = 'Input value';
}
