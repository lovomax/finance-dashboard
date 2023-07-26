import { TestBed } from '@angular/core/testing';

import { SidebarPositionService } from './sidebar-position.service';

describe('SidebarPositionService', () => {
  let service: SidebarPositionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarPositionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
