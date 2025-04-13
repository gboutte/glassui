import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {NavigationStore} from "../navigation.store";
import { CardComponent } from '../../content/card/card.component';

@Component({
    selector: 'gl-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
    imports: [CardComponent]
})
export class NavbarComponent implements OnInit, OnDestroy {
  navigationStore: NavigationStore;
  @Input() key: string = 'default';

  constructor(navigationStore: NavigationStore) {
    this.navigationStore = navigationStore;
  }

  ngOnInit() {
    this.navigationStore.setNavbar(true, this.key);
  }

  ngOnDestroy() {
    this.navigationStore.setNavbar(false, this.key);
  }

  showMenu() {
    // this.navigationStore.showMenu = !this.navigationStore.showMenu;
    this.navigationStore.setShowMenu(!this.navigationStore.showMenu(this.key), this.key);
  }
}
