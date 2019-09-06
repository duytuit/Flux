import { TestBed } from '@angular/core/testing';

import { PartnoService } from './partno.service';

describe('PartnoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PartnoService = TestBed.get(PartnoService);
    expect(service).toBeTruthy();
  });
});
