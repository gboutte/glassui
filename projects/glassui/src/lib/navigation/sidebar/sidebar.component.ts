import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {MenuModel} from "./menu.model";
import {ActivatedRoute} from "@angular/router";
import {NavigationStore} from "../navigation.store";

@Component({
  selector: 'gl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit,OnDestroy{

  @Input() menu: MenuModel[] = []
  navigationStore: NavigationStore;
  constructor(navigationStore: NavigationStore) {
    this.navigationStore = navigationStore;
  }

  isActivated(menu: MenuModel) {
   return window.location.pathname.startsWith(menu.link);
  }
  ngOnInit() {
    this.navigationStore.hasSidebar = true;
  }
  ngOnDestroy() {
    this.navigationStore.hasSidebar = false;
  }
}
