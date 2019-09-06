import { TestBed } from '@angular/core/testing';

import { UsernhomService } from './usernhom.service';

describe('UsernhomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsernhomService = TestBed.get(UsernhomService);
    expect(service).toBeTruthy();
  });
});
