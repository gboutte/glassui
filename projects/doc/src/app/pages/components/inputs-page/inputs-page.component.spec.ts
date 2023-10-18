import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputsPageComponent } from './inputs-page.component';

describe('InputsPageComponent', () => {
  let component: InputsPageComponent;
  let fixture: ComponentFixture<InputsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputsPageComponent]
    });
    fixture = TestBed.createComponent(InputsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
