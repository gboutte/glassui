import {
  ApplicationRef,
  Component,
  EventEmitter, Injector,
  Input,
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
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  @Input() componentContent!: Type<any>;
  @ViewChild('content', {read: ViewContainerRef, static: true}) //normal way
  content!: ViewContainerRef;
  @Output() close = new EventEmitter();
  closed = false;
  constructor(
    protected modalConfig: ModalConfig,
    private injector: Injector,
  ) {
  }

  ngOnInit(): void {
    if (this.componentContent !== undefined) {
      this.content.createComponent(this.componentContent,{
        injector: this.injector
      });
    }
  }

  closeOverlay() {
    this.close.emit(null);
  }

  closeAnimation(){
    this.closed = true;
  }
}
