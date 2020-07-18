import { TestBed } from '@angular/core/testing';

import { MyCasesService } from './my-cases.service';

describe('MyCasesService', () => {
  let service: MyCasesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyCasesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
