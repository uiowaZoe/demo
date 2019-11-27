import { WholesalerService } from './../service/get/wholesaler.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { PaymentmethodService } from '../service/get/paymentmethod.service';
import { PayerService } from '../service/get/payer.service';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';
// import { lstat } from 'fs';
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
  baseCurrency = '$';
  baseLocation = 'USA';
  sellCurrency = '$';
  sellLocation = 'USA';
  wholesalerList = [];
  filteredWholesaler: Observable<String[]>;
  payerList;
  basePaymentMethodsList;
  sellPaymentMethodsList;
  // itinerayLen = 1;
  initialItineray = {airline: '', flightNo: '', flightDate: '', airport: ''};
  initialPassenger = {passenger_type: '', first_name: '', last_name: '', ticket_number: ''};
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
        wholesaler: 0,
        base_price: 0,
        payment_method: 'Check',
        location: 'USA'
      },
      sell_payment: {
        payer_name: 'Payer Default',
        sell_price: 0,
        payment_method: 'Check',
        location: 'USA'
      }
    },
    customer_info: {
      major_contact: {
        phone: '',
        email: '',
        birthday: '',
        gender: '',
        other_contact_type: '',
        other_cantact_number: ''
      },
      passenger: [{
        passenger_type: '',
        first_name: '',
        last_name: '',
        ticket_number: ''
      }]
    }
  };

  wholesalerControl = new FormControl('', [Validators.required]);
  basePaymentControl = new FormControl('', [Validators.required]);
  sellPaymentControl = new FormControl('', [Validators.required]);
  payerSelectControl = new FormControl('', [Validators.required]);
  basePriceControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
  sellPriceControl = new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')]);
  animalControl = new FormControl('', [Validators.required]);
  // selectFormControl = new FormControl('', Validators.required);
  animals: Animal[] = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
  constructor(private wholesalerService: WholesalerService, private paymentService: PaymentmethodService,
    private payerService: PayerService) { }

  ngOnInit() {
    this.wholesalerService.getWholesaler().subscribe(wholesalerList => {
      this.wholesalerList = wholesalerList;
    });
    this.payerService.getPayer().subscribe(list => {
      this.payerList = list;
    });
    this.paymentService.getBasePaymentMethods().subscribe(list => {
      this.basePaymentMethodsList = list;
    });
    this.paymentService.getSellPaymentMethods().subscribe(list => {
      this.sellPaymentMethodsList = list;
    });
    this.filteredWholesaler = this.wholesalerControl.valueChanges
    .pipe(
      startWith(''),
      map(val => val ? this._filterWholesaler(val) : this.wholesalerList.slice())
    );
  }

  private _filterWholesaler(value: string): String[] {
    const filterValue = value.toLowerCase();

    return this.wholesalerList.filter(item => item.name.toLowerCase().indexOf(filterValue) === 0);
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

  // onChange() {
  //   console.log(this.form.payment_info.base_payment.wholesaler);
  // }

  changeCurrency(type) {
    if (type === 'base') {
      if (this.baseCurrency === '$') {
        this.baseCurrency = '¥';
        this.baseLocation = 'CNA';
      } else {
        this.sellCurrency = '$';
        this.sellLocation = 'USA';
      }
    }
  }

}
