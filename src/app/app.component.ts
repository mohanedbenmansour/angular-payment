import { Component } from '@angular/core';
import { PaymentService } from './payment.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(private paymentService:PaymentService){}

  getPaymentInformation(){
    this.paymentService.pay().subscribe(
      (data)=>console.log(data),
      (err)=>console.log(err)
    )
  }
}
