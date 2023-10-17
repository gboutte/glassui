import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from "./pages-routing.module";
import { SetupPageComponent } from './components/setup-page/setup-page.component';
import { ButtonsPageComponent } from './components/buttons-page/buttons-page.component';
import { NavigationPageComponent } from './components/navigation-page/navigation-page.component';



@NgModule({
  declarations: [
    SetupPageComponent,
    ButtonsPageComponent,
    NavigationPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
  ]
})
export class PagesModule { }
