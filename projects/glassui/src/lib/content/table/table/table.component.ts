import { Component } from '@angular/core';
import { CardComponent } from '../../card/card.component';

@Component({
    selector: 'gl-table',
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss'],
    imports: [CardComponent]
})
export class TableComponent {

}
