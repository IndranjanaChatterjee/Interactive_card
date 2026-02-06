import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { numericOnlyValidator } from '../../validators/numeric-only.validator';
import { ThankyouCard } from '../thankyou-card/thankyou-card';
import { Card, CardData } from '../../services/card-data';
import { ThankyouState } from '../../services/thankyou-state';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule,ThankyouCard],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {


   private card = inject(CardData);
  public thank = inject(ThankyouState);

  formData = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl('', [Validators.required, numericOnlyValidator]),
    month:new FormControl('',Validators.required),
    year:new FormControl('',Validators.required),
    cvc: new FormControl('', Validators.required),
  });
  thankyouCard=signal(false);

  onlyDigits(event:Event)
  {
    const input=event.target as HTMLInputElement;
    const value=input.value.replace(/\D/g, '');
    input.value=value;
    this.formData.get('month')?.setValue(value,{ emitEvent: false });
  }
  onlyDigitsyear(event:Event)
  {
    const input=event.target as HTMLInputElement;
    const value=input.value.replace(/\D/g, '');
    input.value=value;
    this.formData.get('year')?.setValue(value,{ emitEvent: false });
  }

  onThreeDigitChange(event: Event) {
  const input = event.target as HTMLInputElement;
  
  // allow only digits
  let value = input.value.replace(/\D/g, '');

  // max length = 3
  if (value.length > 3) {
    value = value.slice(0, 3);
  }

  // 🔥 update BOTH input and form control
  input.value = value;
  this.formData.get('cvc')?.setValue(value, { emitEvent: false });
}


  ngOnInit() {
  this.formData.valueChanges.subscribe(value => {
    this.card.updateCard({
      name: value.name ?? '',
      number: value.number ?? '',
      month: value.month ?? '',
      year: value.year ?? '',
      cvc: value.cvc ?? '',
    });
  });
}

  formatCardNumber(event: Event) {
    const input = event.target as HTMLInputElement;

    
    const digitsOnly = input.value.replace(/\D/g, '');

    const formatted = digitsOnly.replace(/(\d{4})(?=\d)/g, '$1 ').trim();

    input.value = formatted;
  }
  onSubmit(){
    if (this.formData.invalid) {
      // Mark all fields as touched to show error messages
      Object.keys(this.formData.controls).forEach(key => {
        this.formData.get(key)?.markAsTouched();
      });
      console.log('Form is invalid');
      return;
    }
    
    this.thank.thankyouVisible.set(true);
    
   
  }
}
