import {
  ApplicationRef,
  Component, ComponentRef, createComponent, ElementRef, EmbeddedViewRef,
  EventEmitter, Injector,
  Input, OnDestroy,
  OnInit,
  Output,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ModalConfig} from "../../modal-config";

@Component({
    selector: 'gl-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
    standalone: false
})
export class ModalComponent implements OnInit,OnDestroy {
  @Input() componentContent!: Type<any>;
  @ViewChild('content', {read: ElementRef, static: true}) //normal way
  content!: ElementRef;
  @Output() close = new EventEmitter();
  closed = false;

  private componentRef!: ComponentRef<any>;
  constructor(
    protected modalConfig: ModalConfig,
    private injector: Injector,
    private applicationRef: ApplicationRef,
  ) {
  }

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
