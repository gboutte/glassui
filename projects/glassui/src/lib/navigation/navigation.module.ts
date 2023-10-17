import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import { SidebarPageComponent } from './sidebar-page/sidebar-page.component';
import {ButtonsModule} from "../buttons/buttons.module";
import {RouterLink} from "@angular/router";


@NgModule({
  declarations: [
    SidebarComponent,
    SidebarPageComponent
  ],
  imports: [
    CommonModule,
    ButtonsModule,
    RouterLink
  ],
  exports: [
    SidebarComponent,
    SidebarPageComponent,
  ]
})
export class NavigationModule {
}
