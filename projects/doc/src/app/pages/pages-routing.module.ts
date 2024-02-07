import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetupPageComponent} from "./components/setup-page/setup-page.component";
import {ButtonsPageComponent} from "./components/buttons-page/buttons-page.component";
import {NavigationPageComponent} from "./components/navigation-page/navigation-page.component";
import {InputsPageComponent} from "./components/inputs-page/inputs-page.component";
import {ContentPageComponent} from "./components/content-page/content-page.component";
import {ModalPageComponent} from "./components/modal-page/modal-page.component";
import {GridPageComponent} from "./components/grid-page/grid-page.component";
import {ThemePageComponent} from "./components/theme-page/theme-page.component";

const routes: Routes = [
  { path: 'setup', component: SetupPageComponent },
  { path: 'buttons', component: ButtonsPageComponent},
  { path: 'navigation', component: NavigationPageComponent},
  { path: 'inputs', component: InputsPageComponent},
  { path: 'content', component: ContentPageComponent},
  { path: 'grid', component: GridPageComponent},
  { path: 'modal', component: ModalPageComponent},
  { path: 'theme', component: ThemePageComponent},
  { path: '', redirectTo: 'setup', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
