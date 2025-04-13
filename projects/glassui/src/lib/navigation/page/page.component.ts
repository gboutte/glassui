import { Component, Input, inject } from '@angular/core';
import {NavigationStore} from "../navigation.store";

@Component({
    selector: 'gl-page',
    templateUrl: './page.component.html',
    styleUrls: ['./page.component.scss']
})
export class PageComponent {
  navigationStore:NavigationStore;
  @Input() key: string = 'default';
  constructor() {
    const navigationStore = inject(NavigationStore);

    this.navigationStore = navigationStore;
  }
}
