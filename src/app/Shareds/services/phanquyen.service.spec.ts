import { TestBed } from '@angular/core/testing';

import { PhanquyenService } from './phanquyen.service';

describe('PhanquyenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhanquyenService = TestBed.get(PhanquyenService);
    expect(service).toBeTruthy();
  });
});
