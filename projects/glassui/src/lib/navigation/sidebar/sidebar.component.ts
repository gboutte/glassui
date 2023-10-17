import {Component, Input} from '@angular/core';
import {MenuModel} from "./menu.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'gl-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Input() menu: MenuModel[] = []


  isActivated(menu: MenuModel) {
   return window.location.pathname.startsWith(menu.link);
  }
}
