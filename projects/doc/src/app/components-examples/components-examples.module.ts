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
import {
  ContentExampleComponent,
  ContentExampleWithDataComponent,
  ModalExampleComponent
} from './modal/modal-example/modal-example.component';
 import { CheckboxValidationExampleComponent
} from "./forms/checkbox/checkbox-validation-example/checkbox-validation-example.component";
import {CheckboxExampleComponent} from "./forms/checkbox/checkbox-example/checkbox-example.component";
import { RadioExampleComponent } from './forms/radio-example/radio-example.component';
import { GridColsExampleComponent } from './grid/grid-cols-example/grid-cols-example.component';
import { GridColsResponsiveExampleComponent } from './grid/grid-cols-responsive-example/grid-cols-responsive-example.component';


@NgModule({
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
        ModalExampleComponent,
        CheckboxValidationExampleComponent,
        CheckboxExampleComponent,
        RadioExampleComponent,
        GridColsExampleComponent,
        GridColsResponsiveExampleComponent,
    ],
    imports: [
        CommonModule,
        GlassuiModule,
        FormsModule,
        ReactiveFormsModule,
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
        ModalExampleComponent,
        ContentExampleComponent,
        ContentExampleWithDataComponent,
        CheckboxValidationExampleComponent,
        CheckboxExampleComponent,
        RadioExampleComponent,
        GridColsExampleComponent,
        GridColsResponsiveExampleComponent,
    ]
})
export class ComponentsExamplesModule {
}
