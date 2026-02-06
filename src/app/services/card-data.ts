import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export interface Card {
  name: string;
  number: string;
  month: string;
  year: string;
  cvc: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardData {
  private cardDataSource = new BehaviorSubject<Card>({
    name: '',
    number: '',
    month: '',
    year: '',
    cvc: ''
  });

  cardData$ = this.cardDataSource.asObservable();

  updateCard(data: Partial<Card>) {
    this.cardDataSource.next({
      ...this.cardDataSource.value,
      ...data
    });
  }
  
}
