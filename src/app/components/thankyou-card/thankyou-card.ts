import { Component } from '@angular/core';
import { ThankyouState } from '../../services/thankyou-state';

@Component({
  selector: 'app-thankyou-card',
  imports: [],
  templateUrl: './thankyou-card.html',
  styleUrl: './thankyou-card.css',
})
export class ThankyouCard {
  constructor(private thank:ThankyouState)
  {}

  changeState()
  {
    this.thank.thankyouVisible.set(false);
  }

}
