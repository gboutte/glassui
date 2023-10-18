import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeSnippetComponent} from "./code-snippet/code-snippet.component";
import {HttpClientModule} from "@angular/common/http";
import {RouterLink} from "@angular/router";



@NgModule({
  declarations: [
    CodeSnippetComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterLink,
  ],
  exports: [
    CodeSnippetComponent,
  ]
})
export class SharedDocModule { }
