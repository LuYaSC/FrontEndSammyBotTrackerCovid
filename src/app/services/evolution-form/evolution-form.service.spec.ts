import { TestBed } from '@angular/core/testing';

import { EvolutionFormService } from './evolution-form.service';

describe('EvolutionFormService', () => {
  let service: EvolutionFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EvolutionFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
