import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CodeSnippetComponent} from "./code-snippet/code-snippet.component";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import {RouterLink} from "@angular/router";



@NgModule({ declarations: [
        CodeSnippetComponent,
    ],
    exports: [
        CodeSnippetComponent,
    ], imports: [CommonModule,
        RouterLink], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class SharedDocModule { }
