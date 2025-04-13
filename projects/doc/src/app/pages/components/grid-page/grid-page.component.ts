import { Component } from '@angular/core';
import { CardComponent } from '../../../../../../glassui/src/lib/content/card/card.component';

import { CodeSnippetComponent } from '../../../shared-doc/code-snippet/code-snippet.component';
import { GridColsExampleComponent } from '../../../components-examples/grid/grid-cols-example/grid-cols-example.component';
import { GridColsResponsiveExampleComponent } from '../../../components-examples/grid/grid-cols-responsive-example/grid-cols-responsive-example.component';

@Component({
    selector: 'gd-grid-page',
    templateUrl: './grid-page.component.html',
    styleUrls: ['./grid-page.component.scss'],
    imports: [CardComponent, CodeSnippetComponent, GridColsExampleComponent, GridColsResponsiveExampleComponent]
})
export class GridPageComponent {


}
