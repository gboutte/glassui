import { Component } from '@angular/core';
import { CardComponent } from '../../../../../../glassui/src/lib/content/card/card.component';
import { CodeSnippetComponent } from '../../../shared-doc/code-snippet/code-snippet.component';
import { InputExampleComponent } from '../../../components-examples/forms/inputs/input-example/input-example.component';
import { InputTypesExampleComponent } from '../../../components-examples/forms/inputs/input-types-example/input-types-example.component';
import { InputValidationExampleComponent } from '../../../components-examples/forms/inputs/input-validation-example/input-validation-example.component';
import { CheckboxExampleComponent } from '../../../components-examples/forms/checkbox/checkbox-example/checkbox-example.component';
import { RadioExampleComponent } from '../../../components-examples/forms/radio-example/radio-example.component';
import { CheckboxValidationExampleComponent } from '../../../components-examples/forms/checkbox/checkbox-validation-example/checkbox-validation-example.component';
import { SelectExampleComponent } from '../../../components-examples/forms/select/select-example/select-example.component';

@Component({
    selector: 'app-inputs-page',
    templateUrl: './inputs-page.component.html',
    styleUrls: ['./inputs-page.component.scss'],
    imports: [CardComponent, CodeSnippetComponent, InputExampleComponent, InputTypesExampleComponent, InputValidationExampleComponent, CheckboxExampleComponent, RadioExampleComponent, CheckboxValidationExampleComponent, SelectExampleComponent]
})
export class InputsPageComponent {

}
