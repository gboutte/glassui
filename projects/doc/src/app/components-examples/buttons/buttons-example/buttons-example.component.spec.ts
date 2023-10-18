import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsExampleComponent } from './buttons-example.component';

describe('ButtonsExampleComponent', () => {
  let component: ButtonsExampleComponent;
  let fixture: ComponentFixture<ButtonsExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ButtonsExampleComponent]
    });
    fixture = TestBed.createComponent(ButtonsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
