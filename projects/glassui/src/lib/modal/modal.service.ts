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

  open<C>(componentType: Type<C>, data: any = undefined): Observable<any> {

    const modalConfig: ModalConfig = new ModalConfig();
    modalConfig.data = data;


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
      component.destroy();
    });
    return component.instance.close.asObservable();
  }
}
