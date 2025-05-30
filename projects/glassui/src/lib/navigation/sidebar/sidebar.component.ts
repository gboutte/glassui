import { Component, Input, OnDestroy, OnInit, inject } from '@angular/core';
import {MenuModel} from "./menu.model";
import { ActivatedRoute, NavigationEnd, Router, RouterLink } from "@angular/router";
import {NavigationStore} from "../navigation.store";
import { CardComponent } from '../../content/card/card.component';

import { ButtonComponent } from '../../buttons/button/button.component';

@Component({
    selector: 'gl-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss'],
    imports: [CardComponent, ButtonComponent, RouterLink]
})
export class SidebarComponent implements OnInit,OnDestroy{
  private router = inject(Router);


  @Input() menu: MenuModel[] = []
  @Input() key: string = 'default';
  navigationStore: NavigationStore;
  constructor() {
    const navigationStore = inject(NavigationStore);
    const router = this.router;

    this.navigationStore = navigationStore;
    router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        this.navigationStore.setShowMenu(false, this.key)
      }
    });
  }
  isActivated(menu: MenuModel) {
   return window.location.pathname.startsWith(menu.link);
  }
  ngOnInit() {
    this.navigationStore.setSidebar(true, this.key);
  }
  ngOnDestroy() {
    this.navigationStore.setSidebar(false, this.key);
  }
}
