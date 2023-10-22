import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonsExampleComponent} from './buttons/buttons-example/buttons-example.component';
import {GlassuiModule} from "../../../../glassui/src/lib/glassui.module";
import { CardsColorExampleComponent } from './content/card/cards-color-example/cards-color-example.component';
import { CardsTransparencyExampleComponent } from './content/card/cards-transparency-example/cards-transparency-example.component';
import { CardsBlurExampleComponent } from './content/card/cards-blur-example/cards-blur-example.component';


@NgModule({
  declarations: [
    ButtonsExampleComponent,
    CardsColorExampleComponent,
    CardsTransparencyExampleComponent,
    CardsBlurExampleComponent,
  ],
  exports: [
    ButtonsExampleComponent,
    CardsColorExampleComponent,
    CardsTransparencyExampleComponent,
    CardsBlurExampleComponent,
  ],
  imports: [
    CommonModule,
    GlassuiModule,
  ]
})
export class ComponentsExamplesModule {
}
