import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonutWindowComponent } from './donut-window.component';

describe('DonutWindowComponent', () => {
  let component: DonutWindowComponent;
  let fixture: ComponentFixture<DonutWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DonutWindowComponent]
    });
    fixture = TestBed.createComponent(DonutWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
