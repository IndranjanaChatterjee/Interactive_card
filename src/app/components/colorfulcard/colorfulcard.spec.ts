import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Colorfulcard } from './colorfulcard';

describe('Colorfulcard', () => {
  let component: Colorfulcard;
  let fixture: ComponentFixture<Colorfulcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Colorfulcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Colorfulcard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
