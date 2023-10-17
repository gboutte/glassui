import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetupPageComponent} from "./components/setup-page/setup-page.component";
import {ButtonsPageComponent} from "./components/buttons-page/buttons-page.component";
import {NavigationPageComponent} from "./components/navigation-page/navigation-page.component";

const routes: Routes = [
  { path: 'setup', component: SetupPageComponent },
  { path: 'buttons', component: ButtonsPageComponent},
  { path: 'navigation', component: NavigationPageComponent},
  { path: '', redirectTo: 'setup', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
