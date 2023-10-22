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


@NgModule({
  declarations: [
    ButtonsExampleComponent,
    CardsColorExampleComponent,
    CardsTransparencyExampleComponent,
    CardsBlurExampleComponent,
    SidebarExampleComponent,
    NavbarExampleComponent,
    NavbarSidebarExampleComponent,
  ],
  exports: [
    ButtonsExampleComponent,
    CardsColorExampleComponent,
    CardsTransparencyExampleComponent,
    CardsBlurExampleComponent,
    SidebarExampleComponent,
    NavbarExampleComponent,
    NavbarSidebarExampleComponent,
  ],
  imports: [
    CommonModule,
    GlassuiModule,
  ]
})
export class ComponentsExamplesModule {
}
