import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WholesalerService {

  constructor(private http: HttpClient) { }

  getWholesaler() {
    return this.http.get('/api/get/wholesaler');
  }
}

