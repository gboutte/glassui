import { ApplicationRef, Component, ComponentRef, createComponent, ElementRef, EmbeddedViewRef, EventEmitter, Injector, Input, OnDestroy, OnInit, Output, Type, ViewChild, ViewContainerRef, inject } from '@angular/core';
import {ModalConfig} from "../../modal-config";
import { NgClass } from '@angular/common';

@Component({
    selector: 'gl-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    imports: [NgClass]
})
export class ModalComponent implements OnInit,OnDestroy {
  protected modalConfig = inject(ModalConfig);
  private injector = inject(Injector);
  private applicationRef = inject(ApplicationRef);

  @Input() componentContent!: Type<any>;
  @ViewChild('content', {read: ElementRef, static: true}) //normal way
  content!: ElementRef;
  @Output() close = new EventEmitter();
  closed = false;

  private componentRef!: ComponentRef<any>;

  ngOnInit(): void {
    if (this.componentContent !== undefined) {

      //Create the component
      const component = createComponent(this.componentContent, {
        environmentInjector: this.applicationRef.injector,
        elementInjector: this.injector,
      });
      this.applicationRef.attachView(component.hostView);


      // Append the component to the modal to make it visible
      const domElem = (component.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
      this.content.nativeElement.append(domElem);
    }
  }
  ngOnDestroy() {
    if(this.componentRef){
      this.applicationRef.detachView(this.componentRef.hostView);
    }
  }

  closeOverlay() {
    this.close.emit(null);
  }

  closeAnimation(){
    this.closed = true;
  }
}
