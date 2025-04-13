import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckboxExampleComponent } from './checkbox-example.component';

describe('InputExampleComponent', () => {
  let component: CheckboxExampleComponent;
  let fixture: ComponentFixture<CheckboxExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CheckboxExampleComponent]
});
    fixture = TestBed.createComponent(CheckboxExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
