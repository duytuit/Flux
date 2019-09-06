import { TestBed } from '@angular/core/testing';

import { NhomkyService } from './nhomky.service';

describe('NhomkyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NhomkyService = TestBed.get(NhomkyService);
    expect(service).toBeTruthy();
  });
});
