import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import { TableComponent } from './table/table/table.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
    imports: [
        CommonModule,
        CardComponent,
        TableComponent,
        LoaderComponent
    ],
    exports: [
        CardComponent,
        TableComponent,
        LoaderComponent,
    ]
})
export class ContentModule {
}
