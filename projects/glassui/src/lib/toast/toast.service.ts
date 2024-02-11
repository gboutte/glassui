import {ApplicationRef, Injectable, ViewContainerRef} from "@angular/core";
import {ToastComponent} from "./components/toast/toast.component";
import {Color} from "../shared/color.type";

@Injectable()
export class ToastService {

private viewContainerRef!: ViewContainerRef;
  constructor(
    private applicationRef: ApplicationRef) {
    this.viewContainerRef = this.applicationRef.components[0].injector.get(ViewContainerRef);


  }
  alert(toastOptions: ToastOptions) {

    const component = this.viewContainerRef.createComponent(ToastComponent);
    component.instance.title = toastOptions.title;
    component.instance.description = toastOptions.description;
    component.instance.color = toastOptions.color ?? 'white';
    component.instance.icon = toastOptions.icon ?? null;
    const delay = toastOptions.delay ?? 3000;

    setTimeout(() => {
      component.destroy();
    }, delay);

  }
}


interface ToastOptions {
  color?: Color;
  title: string;
  description: string;
  delay?: number;
  icon?: 'success'|'error'|'info';
}
