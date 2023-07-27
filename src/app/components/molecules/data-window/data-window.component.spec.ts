import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataWindowComponent } from './data-window.component';

describe('DataWindowComponent', () => {
  let component: DataWindowComponent;
  let fixture: ComponentFixture<DataWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DataWindowComponent]
    });
    fixture = TestBed.createComponent(DataWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
