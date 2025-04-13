import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarSidebarExampleComponent } from './navbar-sidebar-example.component';

describe('NavbarSidebarExampleComponent', () => {
  let component: NavbarSidebarExampleComponent;
  let fixture: ComponentFixture<NavbarSidebarExampleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports: [NavbarSidebarExampleComponent]
});
    fixture = TestBed.createComponent(NavbarSidebarExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
