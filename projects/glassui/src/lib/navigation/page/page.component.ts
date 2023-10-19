import { Component } from '@angular/core';
import {NavigationStore} from "../navigation.store";

@Component({
  selector: 'gl-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {
  navigationStore:NavigationStore;
  constructor(navigationStore:NavigationStore) {
    this.navigationStore = navigationStore;
  }
}
