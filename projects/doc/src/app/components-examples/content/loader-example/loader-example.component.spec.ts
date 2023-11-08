import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoaderExampleComponent } from './loader-example.component';

describe('LoaderExampleComponent', () => {
  let component: LoaderExampleComponent;
  let fixture: ComponentFixture<LoaderExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoaderExampleComponent]
    });
    fixture = TestBed.createComponent(LoaderExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
