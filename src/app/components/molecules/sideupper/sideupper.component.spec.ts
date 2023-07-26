import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideupperComponent } from './sideupper.component';

describe('SideupperComponent', () => {
  let component: SideupperComponent;
  let fixture: ComponentFixture<SideupperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SideupperComponent]
    });
    fixture = TestBed.createComponent(SideupperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
