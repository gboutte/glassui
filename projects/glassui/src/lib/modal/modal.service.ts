import {
  ApplicationRef, ComponentFactory, ComponentFactoryResolver, createComponent,
  createEnvironmentInjector, EmbeddedViewRef, Inject,
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
import {ModalInjector} from "./modal-injector";
import {DOCUMENT} from "@angular/common";

@Injectable()
export class ModalService {

  private viewContainerRef!: ViewContainerRef;

  constructor(
    private applicationRef: ApplicationRef,
    private injector: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {
    this.viewContainerRef = this.applicationRef.components[0].injector.get(ViewContainerRef);

  }

  open<C>(componentType: Type<C>, config: ModalConfig = new ModalConfig()): Observable<any> {

    let modalConfig: ModalConfig = Object.assign(new ModalConfig(), config);
    let modalRef:ModalRef = new ModalRef();


    // Define the map of elements to inject
    const map = new WeakMap();
    map.set(ModalConfig, modalConfig);
    map.set(ModalRef, modalRef);


    //Create the component
    const component = createComponent(ModalComponent, {
      environmentInjector: this.applicationRef.injector,
      elementInjector: new ModalInjector(this.injector, map),
    });

    this.applicationRef.attachView(component.hostView);


    // Append the component to the body to make it visible
    const domElem = (component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    this.document.body.appendChild(domElem);


    // Bind the close method
    modalRef.close = (result) => {
      component.instance.close.emit(result)
    }

    // Define the component to display in the modal
    component.instance.componentContent = componentType;


    // On close, destroy the component and remove it from the body
    component.instance.close.subscribe(() => {
      component.instance.closeAnimation();
      //Delay the destroy to allow the animation to finish (200ms)
      setTimeout(() => {
        this.applicationRef.detachView(component.hostView);
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
