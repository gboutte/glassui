import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectExampleComponent } from './select-example.component';

describe('SelectExampleComponent', () => {
  let component: SelectExampleComponent;
  let fixture: ComponentFixture<SelectExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectExampleComponent]
    });
    fixture = TestBed.createComponent(SelectExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
