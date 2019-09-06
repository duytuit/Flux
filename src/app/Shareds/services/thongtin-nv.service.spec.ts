import { TestBed } from '@angular/core/testing';

import { ThongtinNVService } from './thongtin-nv.service';

describe('ThongtinNVService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThongtinNVService = TestBed.get(ThongtinNVService);
    expect(service).toBeTruthy();
  });
});
