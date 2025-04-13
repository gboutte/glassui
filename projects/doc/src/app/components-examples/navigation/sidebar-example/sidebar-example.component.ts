import { Component } from '@angular/core';
import { SidebarComponent } from '../../../../../../glassui/src/lib/navigation/sidebar/sidebar.component';
import { PageComponent } from '../../../../../../glassui/src/lib/navigation/page/page.component';

@Component({
    selector: 'gd-sidebar-example',
    templateUrl: './sidebar-example.component.html',
    styleUrls: ['./sidebar-example.component.scss'],
    imports: [SidebarComponent, PageComponent]
})
export class SidebarExampleComponent {

}
