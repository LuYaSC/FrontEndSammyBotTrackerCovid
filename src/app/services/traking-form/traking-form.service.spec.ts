import { TestBed } from '@angular/core/testing';

import { TrakingFormService } from './traking-form.service';

describe('TrakingFormService', () => {
  let service: TrakingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrakingFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
