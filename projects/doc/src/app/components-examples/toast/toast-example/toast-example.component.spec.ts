import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastExampleComponent } from './toast-example.component';

describe('ToastExampleComponent', () => {
  let component: ToastExampleComponent;
  let fixture: ComponentFixture<ToastExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [ToastExampleComponent]
});
    fixture = TestBed.createComponent(ToastExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
