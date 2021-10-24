import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  constructor(private http: HttpClient) { }
 body:any={
  "amount": 990,
  "currency": "XPF",
  "paymentForms": [
      {
        "paymentMethodType": "CARD",
        "pan": "4970100000000055",
        "expiryMonth": "11",
        "expiryYear": "21",
        "securityCode": "123"
      }
    ]
  }


  pay() {
    const headers =new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': "Bearer MTU1NzgwNTM6dGVzdHBhc3N3b3JkX3JCU3lrWXBxNkRMYW1GQVNXS1dGdUZtdlR6MU5lUkRiZ2ROT2ZkTnEwN2UxaA=="
    })
    return this.http.post("https://epaync.nc/api-payment/V4/Charge/CreatePayment",this.body,{  headers });
  }

}
