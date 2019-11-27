import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PayerService {
  constructor(private http: HttpClient) { }
  getPayer() {
    return this.http.get('/api/get/payer');
  }
}
