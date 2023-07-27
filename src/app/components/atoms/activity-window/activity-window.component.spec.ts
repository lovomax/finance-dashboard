import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityWindowComponent } from './activity-window.component';

describe('ActivityWindowComponent', () => {
  let component: ActivityWindowComponent;
  let fixture: ComponentFixture<ActivityWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActivityWindowComponent]
    });
    fixture = TestBed.createComponent(ActivityWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
