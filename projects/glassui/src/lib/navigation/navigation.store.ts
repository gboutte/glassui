import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class NavigationStore {
  // hasNavbar = false;
  // hasSidebar = false;
  // showMenu = false;
  //
  private configs: {
    [key: string]: {
      hasNavbar: boolean,
      hasSidebar: boolean,
      showMenu: boolean
    }
  } = {};

  hasNavbar(code: string = 'default'): boolean {
    return this.configs[code]?.hasNavbar ?? false;
  }

  hasSidebar(code: string = 'default'): boolean {
    return this.configs[code]?.hasSidebar ?? false;
  }

  showMenu(code: string = 'default'): boolean {
    return this.configs[code]?.showMenu ?? false;
  }

  setNavbar( hasNavbar: boolean = true,code: string = 'default') {
    this.configs[code] = {
      ...this.configs[code],
      hasNavbar
    };
  }

  setSidebar(hasSidebar: boolean = true,code: string = 'default') {
    this.configs[code] = {
      ...this.configs[code],
      hasSidebar
    };
  }

  setShowMenu(showMenu: boolean = true,code: string = 'default') {
    this.configs[code] = {
      ...this.configs[code],
      showMenu
    };
  }
}
