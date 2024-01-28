import {ApplicationRef, createEnvironmentInjector, Injectable, Type, ViewContainerRef} from "@angular/core";
import {ModalComponent} from "./components/modal/modal.component";
import {Observable} from "rxjs";
import {ModalConfig} from "./modal-config";

@Injectable()
export class ModalService {

  private viewContainerRef!: ViewContainerRef;

  constructor(
    private applicationRef: ApplicationRef) {
    this.viewContainerRef = this.applicationRef.components[0].injector.get(ViewContainerRef);


  }

  open<C>(componentType: Type<C>, config: ModalConfig = new ModalConfig()): Observable<any> {

    let modalConfig: ModalConfig = Object.assign(new ModalConfig(), config);

    const childInjector = createEnvironmentInjector([
      {
        provide: ModalConfig,
        useValue: modalConfig
      }
    ], this.applicationRef.injector)

    const component = this.viewContainerRef.createComponent(ModalComponent, {
      environmentInjector: childInjector
    });
    component.instance.componentContent = componentType;

    component.instance.close.subscribe(() => {
      component.instance.closeAnimation();
      //Delay the destroy to allow the animation to finish (200ms)
      setTimeout(() => {
      component.destroy();
      }, 100);
    });
    return component.instance.close.asObservable();
  }
}
