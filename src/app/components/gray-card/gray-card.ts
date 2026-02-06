import { Component, inject, Input, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CardData } from '../../services/card-data';

@Component({
  selector: 'app-gray-card',
  imports: [],
  templateUrl: './gray-card.html',
  styleUrl: './gray-card.css',
})
export class GrayCard implements OnInit,OnDestroy{
  @Input() form!: FormGroup;
  displayCVC = '000';

  private sub?: Subscription;
  private cardService=inject(CardData);
  ngOnInit(){
    this.sub = this.cardService.cardData$.subscribe(data => {
      this.displayCVC = data.cvc || '000';
     
        
    });

  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  

}
