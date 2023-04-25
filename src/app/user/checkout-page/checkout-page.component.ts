import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OrderServiceService } from '../service/order-service.service';

var Razorpay:any;

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent implements OnInit{
  myForm: any = {};
  course!:any;
   previousUrl: string | undefined;
   paymentId!: string;
   error!: string;
  constructor(private fb: FormBuilder, private router : Router,private location: Location, private orderService : OrderServiceService) { 
    
  }
  ngOnInit(): void {
    this.getCheckoutCourse()

    this.myForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      city: [''],
      postcode: [''],
      saveInfo: [false],
      notes: ['']
    });
  }
  submitForm(){
    if(this.myForm.invalid){
      return
    }else{
      this.orderService.createOrder().subscribe((order: any) => {
        console.log(order,'ordere');
        
        this.payWithRazor(order);
      });
    }    
  }

  payWithRazor(order: any) {
    const razorpay = new Razorpay({
      key: "rzp_test_gAJDEjn0BI0746",
      amount: order.amount,
      currency: 'INR',
      name: 'Acme Corp',
      description: 'Test Payment',
      image: 'https://example.com/your_logo',
      order_id: order.id,
      handler: (response: any) => {
        this.capturePayment(response.razorpay_payment_id, order.amount);
      },
      prefill: {
        name: 'John Doe',
        email: 'john@example.com',
        contact: '+919999999999',
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#F37254',
      },
    });
    razorpay.open();
  }

  capturePayment(paymentId: string, amount: number) {
    this.orderService.capturePayment(paymentId, amount).subscribe(() => {
      alert('Payment captured successfully!');
    });
  }

  getCheckoutCourse(){
    const courseString = localStorage.getItem('course');
    const course = courseString ? JSON.parse(courseString) : null;
    // Use the course data in your component
    this.course=course;
    console.log(course);
  }
  removeItem(){
    localStorage.removeItem('course');
    this.router.navigateByUrl(`/user/course-view/${this.course._id}`)
  }
  }


