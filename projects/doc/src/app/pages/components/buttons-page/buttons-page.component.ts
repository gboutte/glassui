import { Component } from '@angular/core';
import { CardComponent } from '../../../../../../glassui/src/lib/content/card/card.component';
import { CodeSnippetComponent } from '../../../shared-doc/code-snippet/code-snippet.component';
import { ButtonsExampleComponent } from '../../../components-examples/buttons/buttons-example/buttons-example.component';

@Component({
    selector: 'app-buttons-page',
    templateUrl: './buttons-page.component.html',
    styleUrls: ['./buttons-page.component.scss'],
    imports: [CardComponent, CodeSnippetComponent, ButtonsExampleComponent]
})
export class ButtonsPageComponent {

}
