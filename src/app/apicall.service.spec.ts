import { TestBed } from '@angular/core/testing';

import { APICallService } from './apicall.service';

describe('ApicallService', () => {
  let service: APICallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(APICallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
