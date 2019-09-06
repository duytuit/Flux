import { TestBed } from '@angular/core/testing';

import { DanhmucService } from './danhmuc.service';

describe('DanhmucService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DanhmucService = TestBed.get(DanhmucService);
    expect(service).toBeTruthy();
  });
});
