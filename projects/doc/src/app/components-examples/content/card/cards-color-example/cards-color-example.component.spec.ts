import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsColorExampleComponent } from './cards-color-example.component';

describe('CardsColorExampleComponent', () => {
  let component: CardsColorExampleComponent;
  let fixture: ComponentFixture<CardsColorExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [CardsColorExampleComponent]
});
    fixture = TestBed.createComponent(CardsColorExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
