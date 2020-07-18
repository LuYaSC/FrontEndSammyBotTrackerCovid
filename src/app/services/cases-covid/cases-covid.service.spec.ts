import { TestBed } from '@angular/core/testing';

import { CasesCovidService } from './cases-covid.service';

describe('CasesCovidService', () => {
  let service: CasesCovidService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasesCovidService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
