import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThemePageComponent } from './theme-page.component';

describe('ThemePageComponent', () => {
  let component: ThemePageComponent;
  let fixture: ComponentFixture<ThemePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ThemePageComponent]
    });
    fixture = TestBed.createComponent(ThemePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
