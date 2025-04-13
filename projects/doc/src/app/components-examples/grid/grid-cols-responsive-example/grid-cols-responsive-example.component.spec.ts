import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColsResponsiveExampleComponent } from './grid-cols-responsive-example.component';

describe('GridColsResponsiveExampleComponent', () => {
  let component: GridColsResponsiveExampleComponent;
  let fixture: ComponentFixture<GridColsResponsiveExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [GridColsResponsiveExampleComponent]
});
    fixture = TestBed.createComponent(GridColsResponsiveExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
