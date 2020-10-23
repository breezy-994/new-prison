import { TestBed } from '@angular/core/testing';

import { PrisonersDataService } from './prisoners-data.service';

describe('PrisonersDataService', () => {
  let service: PrisonersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrisonersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
