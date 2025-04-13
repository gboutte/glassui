import { Component } from '@angular/core';
import { CardComponent } from '../../../../../../glassui/src/lib/content/card/card.component';
import { CodeSnippetComponent } from '../../../shared-doc/code-snippet/code-snippet.component';
import { CardsColorExampleComponent } from '../../../components-examples/content/card/cards-color-example/cards-color-example.component';
import { CardsTransparencyExampleComponent } from '../../../components-examples/content/card/cards-transparency-example/cards-transparency-example.component';
import { CardsBlurExampleComponent } from '../../../components-examples/content/card/cards-blur-example/cards-blur-example.component';
import { TableExampleComponent } from '../../../components-examples/content/table-example/table-example.component';
import { ToastExampleComponent } from '../../../components-examples/toast/toast-example/toast-example.component';
import { LoaderExampleComponent } from '../../../components-examples/content/loader-example/loader-example.component';

@Component({
    selector: 'app-content-page',
    templateUrl: './content-page.component.html',
    styleUrls: ['./content-page.component.scss'],
    imports: [CardComponent, CodeSnippetComponent, CardsColorExampleComponent, CardsTransparencyExampleComponent, CardsBlurExampleComponent, TableExampleComponent, ToastExampleComponent, LoaderExampleComponent]
})
export class ContentPageComponent {

}
