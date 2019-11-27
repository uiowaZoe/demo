import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentmethodService {

  constructor(private http: HttpClient) { }

  getBasePaymentMethods() {
    // /api/get/base/paymentmethod
    return this.http.get('/api/get/base/paymentmethod');
  }

  getSellPaymentMethods() {
    return this.http.get('/api/get/sell/paymentmethod');
  }

  getsSellNonCCPaymentMethods() {
    return this.http.get('/api/get/sell/noncc/paymentmethod');
  }
}
