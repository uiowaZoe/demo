import { WholesalerService } from './../service/get/wholesaler.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export interface Animal {
  name: string;
  sound: string;
}
@Component({
  selector: 'app-salesperson-system',
  templateUrl: './salesperson-system.component.html',
  styleUrls: ['./salesperson-system.component.css']
})
export class SalespersonSystemComponent implements OnInit {
  step = 0;
  wholesalerList;
  // itinerayLen = 1;
  initialItineray = {airline: '', flightNo: '', flightDate: '', airport: ''};
  form = {
    basic_info: {
      locator: ''
    },
    itineray_info: {
      itineray: [
        {airline: '', flightNo: '', flightDate: '', airport: ''}
      ]
    },
    payment_info: {
      base_payment: {
        wholesaler: 'Wholesaler Default',
        base_price: 0,
        payment_method: 'Check',
        location: 'USA'
      },
      sell_payment: {
        payerName: 'Payer Default',
        sell_price: 0,
        payment_method: 'Check',
        location: 'USA'
      }
    }
  };

  wholesalerControl = new FormControl('', [Validators.required]);
  // selectFormControl = new FormControl('', Validators.required);

  animalControl = new FormControl('', [Validators.required]);
  selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  constructor(private wholesalerService: WholesalerService) { }

  ngOnInit() {
    this.wholesalerService.getWholesaler().subscribe(wholesalerList => {
      this.wholesalerList = wholesalerList;
  });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

}
