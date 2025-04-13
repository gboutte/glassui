import { Component } from '@angular/core';
import { NavbarComponent } from '../../../../../../glassui/src/lib/navigation/navbar/navbar.component';
import { PageComponent } from '../../../../../../glassui/src/lib/navigation/page/page.component';

@Component({
    selector: 'gd-navbar-example',
    templateUrl: './navbar-example.component.html',
    styleUrls: ['./navbar-example.component.scss'],
    imports: [NavbarComponent, PageComponent]
})
export class NavbarExampleComponent {

}
