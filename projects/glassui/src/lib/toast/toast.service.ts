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
  alert(color:Color = "green",title:string,description: string,delay: number = 3000) {

    const component = this.viewContainerRef.createComponent(ToastComponent);
    component.instance.title = title;
    component.instance.description = description;

    setTimeout(() => {
      component.destroy();
    }, delay);

  }
}
