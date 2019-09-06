import { TestBed } from '@angular/core/testing';

import { ThongkeService } from './thongke.service';

describe('ThongkeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThongkeService = TestBed.get(ThongkeService);
    expect(service).toBeTruthy();
  });
});
