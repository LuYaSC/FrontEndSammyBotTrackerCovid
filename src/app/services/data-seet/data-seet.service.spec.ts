import { TestBed } from '@angular/core/testing';

import { DataSeetService } from './data-seet.service';

describe('DataSeetService', () => {
  let service: DataSeetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataSeetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
