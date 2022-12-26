import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Tour } from '../tour-module/tour-module.component';

@Component({
  selector: 'app-tour-add',
  templateUrl: './tour-add.component.html',
  styleUrls: ['./tour-add.component.css'],
})

export class TourAddComponent  {
  constructor() { }
 





  @Output() formSubmitEvent = new EventEmitter<Tour>();

  TourAddForm = new FormGroup({
    tourname: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.minLength(2),
    ]),
    tourdestination: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.minLength(2),
    ]),
    tourdestinationCity: new FormControl('', [
      Validators.required,
      Validators.maxLength(64),
      Validators.minLength(2),
    ]),
    
   
    tourstartDate: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      
    ]),
    tourendDate: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
    ]),
    tourquantity: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      Validators.maxLength(8),
      Validators.pattern('[0-9]*.?[0-9]+'),
    ]),
    tourseats: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      Validators.maxLength(8),
      Validators.pattern('[0-9]*.?[0-9]+'),
    ]),
  
    tourunit: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      Validators.maxLength(4),
      Validators.minLength(1),
    ]),

    tourprice: new FormControl('', [
      Validators.required,
      Validators.maxLength(16),
      Validators.pattern('[0-9]*.?[0-9]+'),
    ]),
    tourshortdesc: new FormControl('', [
      Validators.required,
      Validators.maxLength(228),
      Validators.minLength(2),
    ]),
    tourimagelink: new FormControl('', [
      Validators.required,
      Validators.pattern(/\S+/),
      Validators.minLength(2),
    ]),
  });

  wrong = false;
  ok = false;

  submitForm() {
    
    if (!this.TourAddForm.valid) {
      this.wrong = true;
      return;
    }
     let newTour = {
       name: this.TourAddForm.get('tourname')!.value,
       destination: this.TourAddForm.get('tourdestination')!.value,
       destinationCity: this.TourAddForm.get('tourdestinationCity')!.value,
       startDate: this.TourAddForm.get('tourstartDate')!.value,
       endDate: this.TourAddForm.get('tourendDate')!.value,
       quantity: this.TourAddForm.get('tourquantity')!.value,
       seats: this.TourAddForm.get('tourseats')!.value,
       price: this.TourAddForm.get('tourprice')!.value,
       shortdesc: this.TourAddForm.get('tourshortdesc')!.value,
       imagelink: this.TourAddForm.get('tourimagelink')!.value,
       amount: 0,
       unit: this.TourAddForm.get('tourunit')!.value,
       stars: 0
     } as unknown as Tour;
    this.formSubmitEvent.emit(newTour);
    this.wrong = false;
    this.ok = true;
  }
}

