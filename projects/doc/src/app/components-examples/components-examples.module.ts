import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsExampleComponent} from './buttons/buttons-example/buttons-example.component';
import {GlassuiModule} from "../../../../glassui/src/lib/glassui.module";
import { CardsColorExampleComponent } from './content/card/cards-color-example/cards-color-example.component';
import { CardsTransparencyExampleComponent } from './content/card/cards-transparency-example/cards-transparency-example.component';
import { CardsBlurExampleComponent } from './content/card/cards-blur-example/cards-blur-example.component';
import { SidebarExampleComponent } from './navigation/sidebar-example/sidebar-example.component';
import { NavbarExampleComponent } from './navigation/navbar-example/navbar-example.component';
import { NavbarSidebarExampleComponent } from './navigation/navbar-sidebar-example/navbar-sidebar-example.component';
import { InputExampleComponent } from './forms/inputs/input-example/input-example.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { InputTypesExampleComponent } from './forms/inputs/input-types-example/input-types-example.component';
import { InputValidationExampleComponent } from './forms/inputs/input-validation-example/input-validation-example.component';
import { SelectExampleComponent } from './forms/select/select-example/select-example.component';
import { ToastExampleComponent } from './toast/toast-example/toast-example.component';
import { TableExampleComponent } from './content/table-example/table-example.component';
import { LoaderExampleComponent } from './content/loader-example/loader-example.component';


@NgModule({
  declarations: [
    ButtonsExampleComponent,
    CardsColorExampleComponent,
    CardsTransparencyExampleComponent,
    CardsBlurExampleComponent,
    SidebarExampleComponent,
    NavbarExampleComponent,
    NavbarSidebarExampleComponent,
    InputExampleComponent,
    InputTypesExampleComponent,
    InputValidationExampleComponent,
    SelectExampleComponent,
    ToastExampleComponent,
    TableExampleComponent,
    LoaderExampleComponent,
  ],
  exports: [
    ButtonsExampleComponent,
    CardsColorExampleComponent,
    CardsTransparencyExampleComponent,
    CardsBlurExampleComponent,
    SidebarExampleComponent,
    NavbarExampleComponent,
    NavbarSidebarExampleComponent,
    InputExampleComponent,
    InputTypesExampleComponent,
    InputValidationExampleComponent,
    SelectExampleComponent,
    ToastExampleComponent,
    TableExampleComponent,
    LoaderExampleComponent,
  ],
  imports: [
    CommonModule,
    GlassuiModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsExamplesModule {
}
