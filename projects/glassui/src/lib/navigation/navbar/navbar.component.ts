import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationStore} from "../navigation.store";

@Component({
  selector: 'gl-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy{
  navigationStore: NavigationStore;

  constructor(navigationStore: NavigationStore) {
    this.navigationStore = navigationStore;
  }

  ngOnInit() {
    this.navigationStore.hasNavbar = true;
  }

  ngOnDestroy() {
    this.navigationStore.hasNavbar = false;
  }
}
