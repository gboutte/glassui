import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarExampleComponent } from './sidebar-example.component';

describe('SidebarExampleComponent', () => {
  let component: SidebarExampleComponent;
  let fixture: ComponentFixture<SidebarExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarExampleComponent]
    });
    fixture = TestBed.createComponent(SidebarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
