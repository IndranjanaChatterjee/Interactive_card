import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CardData } from '../../services/card-data';

@Component({
  selector: 'app-colorfulcard',
  imports: [],
  templateUrl: './colorfulcard.html',
  styleUrl: './colorfulcard.css',
})
export class Colorfulcard implements OnInit,OnDestroy{
  @Input() form!:FormGroup
  displayNumber = '0000 0000 0000 0000';
  displayName = 'JANE APPLESEED';
  displayExpiry = '00/00';

  private sub?: Subscription;
   constructor(private cardService: CardData) {}

  ngOnInit() {
    this.sub = this.cardService.cardData$.subscribe(data => {
      this.displayName = data.name
        ? data.name.toUpperCase()
        : 'JANE APPLESEED';

      this.displayNumber = data.number || '0000 0000 0000 0000';

      this.displayExpiry =
        `${data.month || '00'}/${data.year || '00'}`;
    });
  }

  ngOnDestroy() {
    this.sub?.unsubscribe();
  }

  

}
