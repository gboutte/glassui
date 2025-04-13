import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxValidationExampleComponent } from './checkbox-validation-example.component';

describe('InputValidationExampleComponent', () => {
  let component: CheckboxValidationExampleComponent;
  let fixture: ComponentFixture<CheckboxValidationExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CheckboxValidationExampleComponent]
});
    fixture = TestBed.createComponent(CheckboxValidationExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
