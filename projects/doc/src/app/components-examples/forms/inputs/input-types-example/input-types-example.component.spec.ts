import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputTypesExampleComponent } from './input-types-example.component';

describe('InputTypesExampleComponent', () => {
  let component: InputTypesExampleComponent;
  let fixture: ComponentFixture<InputTypesExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InputTypesExampleComponent]
    });
    fixture = TestBed.createComponent(InputTypesExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
