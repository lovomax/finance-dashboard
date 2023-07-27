import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineWindowComponent } from './line-window.component';

describe('LineWindowComponent', () => {
  let component: LineWindowComponent;
  let fixture: ComponentFixture<LineWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LineWindowComponent]
    });
    fixture = TestBed.createComponent(LineWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
