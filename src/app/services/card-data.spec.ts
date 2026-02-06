import { TestBed } from '@angular/core/testing';

import { CardData } from './card-data';

describe('CardData', () => {
  let service: CardData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
