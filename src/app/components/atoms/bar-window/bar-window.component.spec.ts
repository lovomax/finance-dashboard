import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarWindowComponent } from './bar-window.component';

describe('BarWindowComponent', () => {
  let component: BarWindowComponent;
  let fixture: ComponentFixture<BarWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BarWindowComponent]
    });
    fixture = TestBed.createComponent(BarWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
