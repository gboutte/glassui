import {Component, Input} from '@angular/core';
import {NavigationStore} from "../navigation.store";

@Component({
    selector: 'gl-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss'],
    standalone: false
})
export class PageComponent {
  navigationStore:NavigationStore;
  @Input() key: string = 'default';
  constructor(navigationStore:NavigationStore) {
    this.navigationStore = navigationStore;
  }
}
