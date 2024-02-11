import {
  ApplicationRef, ComponentFactory, ComponentFactoryResolver, createComponent,
  createEnvironmentInjector,
  Injectable, Injector,
  NgModuleRef,
  Type,
  ViewContainerRef
} from "@angular/core";
import {ModalComponent} from "./components/modal/modal.component";
import {Observable} from "rxjs";
import {ModalConfig} from "./modal-config";
import {ModalConfirmConfig} from "./modal-confirm-config";
import {ModalConfirmComponent} from "./components/modal-confirm/modal-confirm.component";
import {ModalRef} from "./modal-ref";

@Injectable()
export class ModalService {

  private viewContainerRef!: ViewContainerRef;

  constructor(
    private applicationRef: ApplicationRef,
    private injector: Injector
  ) {
    this.viewContainerRef = this.applicationRef.components[0].injector.get(ViewContainerRef);

  }

  open<C>(componentType: Type<C>, config: ModalConfig = new ModalConfig()): Observable<any> {

    let modalConfig: ModalConfig = Object.assign(new ModalConfig(), config);
    let modalRef:ModalRef = new ModalRef();

    const childInjector = createEnvironmentInjector([
      {
        provide: ModalConfig,
        useValue: modalConfig
      },
      {
        provide: ModalRef,
        useValue: modalRef
      }
    ], this.applicationRef.injector)

    const component = createComponent(ModalComponent, {
      environmentInjector: childInjector,
      elementInjector: this.injector
    });
    modalRef.close = (result) => {
      component.instance.close.emit(result)
    }
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


  confirm(title: string, message: string, config: ModalConfirmConfig = new ModalConfirmConfig()): Observable<any> {
    let modalConfig: ModalConfig = Object.assign(new ModalConfig(), config);

    if(!modalConfig.data) {
      modalConfig.data = {};
    }
    modalConfig.data.confirmData = config;
    modalConfig.title = title;
    modalConfig.data.message = message;

    return this.open(ModalConfirmComponent, modalConfig);

  }
}
