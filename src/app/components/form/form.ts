import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { numericOnlyValidator } from '../../validators/numeric-only.validator';
import { ThankyouCard } from '../thankyou-card/thankyou-card';

@Component({
  selector: 'app-form',
  imports: [CommonModule, ReactiveFormsModule,ThankyouCard],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  formData = new FormGroup({
    name: new FormControl('', Validators.required),
    number: new FormControl('', [Validators.required, numericOnlyValidator]),
    month:new FormControl('',Validators.required),
    year:new FormControl('',Validators.required),
    cvc: new FormControl('', Validators.required),
  });
  thankyouCard=signal(false);

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
    this.thankyouCard.set(true);
    
   
  }
}
