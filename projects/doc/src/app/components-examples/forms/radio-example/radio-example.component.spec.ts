import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioExampleComponent } from './radio-example.component';

describe('RadioExampleComponent', () => {
  let component: RadioExampleComponent;
  let fixture: ComponentFixture<RadioExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RadioExampleComponent]
    });
    fixture = TestBed.createComponent(RadioExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
