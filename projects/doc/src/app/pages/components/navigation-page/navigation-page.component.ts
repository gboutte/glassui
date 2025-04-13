import { Component } from '@angular/core';
import { CardComponent } from '../../../../../../glassui/src/lib/content/card/card.component';
import { CodeSnippetComponent } from '../../../shared-doc/code-snippet/code-snippet.component';
import { NavbarExampleComponent } from '../../../components-examples/navigation/navbar-example/navbar-example.component';
import { SidebarExampleComponent } from '../../../components-examples/navigation/sidebar-example/sidebar-example.component';
import { NavbarSidebarExampleComponent } from '../../../components-examples/navigation/navbar-sidebar-example/navbar-sidebar-example.component';

@Component({
    selector: 'app-navigation-page',
    templateUrl: './navigation-page.component.html',
    styleUrls: ['./navigation-page.component.scss'],
    imports: [CardComponent, CodeSnippetComponent, NavbarExampleComponent, SidebarExampleComponent, NavbarSidebarExampleComponent]
})
export class NavigationPageComponent {

}
