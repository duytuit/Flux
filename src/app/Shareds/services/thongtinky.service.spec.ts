import { TestBed } from '@angular/core/testing';

import { ThongtinkyService } from './thongtinky.service';

describe('ThongtinkyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThongtinkyService = TestBed.get(ThongtinkyService);
    expect(service).toBeTruthy();
  });
});
