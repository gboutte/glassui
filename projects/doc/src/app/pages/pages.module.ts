import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PagesRoutingModule} from "./pages-routing.module";
import { SetupPageComponent } from './components/setup-page/setup-page.component';
import { ButtonsPageComponent } from './components/buttons-page/buttons-page.component';
import { NavigationPageComponent } from './components/navigation-page/navigation-page.component';
import { InputsPageComponent } from './components/inputs-page/inputs-page.component';
import { ContentPageComponent } from './components/content-page/content-page.component';
import {SharedDocModule} from "../shared-doc/shared-doc.module";
import {ComponentsExamplesModule} from "../components-examples/components-examples.module";
import {GlassuiModule} from "../../../../glassui/src/lib/glassui.module";



@NgModule({
  declarations: [
    SetupPageComponent,
    ButtonsPageComponent,
    NavigationPageComponent,
    InputsPageComponent,
    ContentPageComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedDocModule,
    ComponentsExamplesModule,
    GlassuiModule,
  ]
})
export class PagesModule { }
