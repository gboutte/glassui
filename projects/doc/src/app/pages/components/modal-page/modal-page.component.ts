import { Component } from '@angular/core';
import { CardComponent } from '../../../../../../glassui/src/lib/content/card/card.component';
import { CodeSnippetComponent } from '../../../shared-doc/code-snippet/code-snippet.component';
import { ModalExampleComponent } from '../../../components-examples/modal/modal-example/modal-example.component';

@Component({
    selector: 'gd-modal-page',
    templateUrl: './modal-page.component.html',
    styleUrls: ['./modal-page.component.scss'],
    imports: [CardComponent, CodeSnippetComponent, ModalExampleComponent]
})
export class ModalPageComponent {

}
