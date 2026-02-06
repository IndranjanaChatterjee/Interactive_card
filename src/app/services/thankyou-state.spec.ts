import { TestBed } from '@angular/core/testing';

import { ThankyouState } from './thankyou-state';

describe('ThankyouState', () => {
  let service: ThankyouState;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThankyouState);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
