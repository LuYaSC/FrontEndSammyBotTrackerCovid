import { TestBed } from '@angular/core/testing';

import { RecoverCaseService } from './recover-case.service';

describe('RecoverCaseService', () => {
  let service: RecoverCaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecoverCaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
