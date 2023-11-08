import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CardComponent} from './card/card.component';
import { TableComponent } from './table/table/table.component';
import { LoaderComponent } from './loader/loader.component';


@NgModule({
  declarations: [
    CardComponent,
    TableComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CardComponent,
    TableComponent,
    LoaderComponent,
  ]
})
export class ContentModule {
}
