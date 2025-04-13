import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SidebarComponent} from './sidebar/sidebar.component';
import {ButtonsModule} from "../buttons/buttons.module";
import {RouterLink} from "@angular/router";
import { NavbarComponent } from './navbar/navbar.component';
import {ContentModule} from "../content/content.module";
import { PageComponent } from './page/page.component';


@NgModule({
    imports: [
        CommonModule,
        ButtonsModule,
        RouterLink,
        ContentModule,
        SidebarComponent,
        NavbarComponent,
        PageComponent
    ],
    exports: [
        SidebarComponent,
        NavbarComponent,
        PageComponent,
    ]
})
export class NavigationModule {
}
