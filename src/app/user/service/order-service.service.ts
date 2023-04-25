import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ORDER } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http : HttpClient) { }
  

createOrder() {
  return this.http.post(ORDER, {});
}

capturePayment(paymentId: string, amount: number) {
  return this.http.post('/capture', { paymentId, amount });
}

}
