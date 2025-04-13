import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridColsExampleComponent } from './grid-cols-example.component';

describe('GridColsComponent', () => {
  let component: GridColsExampleComponent;
  let fixture: ComponentFixture<GridColsExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [GridColsExampleComponent]
});
    fixture = TestBed.createComponent(GridColsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
