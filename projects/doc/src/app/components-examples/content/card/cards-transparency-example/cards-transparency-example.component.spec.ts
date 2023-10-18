import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsTransparencyExampleComponent } from './cards-transparency-example.component';

describe('CardsTransparencyExampleComponent', () => {
  let component: CardsTransparencyExampleComponent;
  let fixture: ComponentFixture<CardsTransparencyExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardsTransparencyExampleComponent]
    });
    fixture = TestBed.createComponent(CardsTransparencyExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
