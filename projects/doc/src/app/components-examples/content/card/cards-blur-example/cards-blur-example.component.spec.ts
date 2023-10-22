import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsBlurExampleComponent } from './cards-blur-example.component';

describe('CardsBlurExampleComponent', () => {
  let component: CardsBlurExampleComponent;
  let fixture: ComponentFixture<CardsBlurExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsBlurExampleComponent]
    });
    fixture = TestBed.createComponent(CardsBlurExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
