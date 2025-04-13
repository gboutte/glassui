import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputValidationExampleComponent } from './input-validation-example.component';

describe('InputValidationExampleComponent', () => {
  let component: InputValidationExampleComponent;
  let fixture: ComponentFixture<InputValidationExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [InputValidationExampleComponent]
});
    fixture = TestBed.createComponent(InputValidationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
