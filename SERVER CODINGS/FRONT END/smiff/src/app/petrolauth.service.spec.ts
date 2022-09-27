import { TestBed } from '@angular/core/testing';

import { PetrolauthService } from './petrolauth.service';

describe('PetrolauthService', () => {
  let service: PetrolauthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetrolauthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
