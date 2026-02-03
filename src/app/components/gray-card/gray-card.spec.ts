import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrayCard } from './gray-card';

describe('GrayCard', () => {
  let component: GrayCard;
  let fixture: ComponentFixture<GrayCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrayCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrayCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
