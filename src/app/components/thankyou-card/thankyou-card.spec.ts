import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankyouCard } from './thankyou-card';

describe('ThankyouCard', () => {
  let component: ThankyouCard;
  let fixture: ComponentFixture<ThankyouCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThankyouCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThankyouCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
