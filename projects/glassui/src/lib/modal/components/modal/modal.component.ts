import {Component, EventEmitter, Input, OnInit, Output, Type, ViewChild, ViewContainerRef} from '@angular/core';

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

  constructor() {
  }

  ngOnInit(): void {
    if (this.componentContent !== undefined) {
      this.content.createComponent(this.componentContent);
    }
  }

  closeOverlay() {
    this.close.emit(null);
  }

}
