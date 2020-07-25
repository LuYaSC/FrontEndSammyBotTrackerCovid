import { TestBed } from '@angular/core/testing';

import { CapturedCaseService } from './captured-case.service';

describe('CapturedCaseService', () => {
  let service: CapturedCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CapturedCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
