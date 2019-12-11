import { TestBed } from '@angular/core/testing';

import { PollformserviceService } from './pollformservice.service';

describe('PollformserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PollformserviceService = TestBed.get(PollformserviceService);
    expect(service).toBeTruthy();
  });
});
