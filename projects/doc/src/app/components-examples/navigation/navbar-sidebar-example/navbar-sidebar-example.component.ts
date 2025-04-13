import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../../../glassui/src/lib/navigation/navbar/navbar.component';
import { SidebarComponent } from '../../../../../../glassui/src/lib/navigation/sidebar/sidebar.component';
import { PageComponent } from '../../../../../../glassui/src/lib/navigation/page/page.component';

@Component({
    selector: 'gd-navbar-sidebar-example',
    templateUrl: './navbar-sidebar-example.component.html',
    styleUrls: ['./navbar-sidebar-example.component.scss'],
    imports: [NavbarComponent, SidebarComponent, PageComponent]
})
export class NavbarSidebarExampleComponent {

}
