import { Component } from '@angular/core';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { NgxOtpInputConfig } from 'ngx-otp-input/public-api';

@Component({
  selector: 'app-email-otp',
  templateUrl: './email-otp.component.html',
  styleUrls: ['./email-otp.component.css']
})
export class EmailOtpComponent {
  //header of the otp page 
  header:string="Email"

  // otp from the backend
  otp:number=123456;

  // error variable
  error:boolean=false;
  enterOtp!:number;

  //otp countdown
  countEnd:boolean=true;
  notify = '';
  config: CountdownConfig = { leftTime: 90, notify: [1] };


  // ngx otp input
  otpInputConfig:NgxOtpInputConfig={
    otpLength:6,
    autofocus:true,
    classList:{
      inputBox:'my-super-box-class',
      input:'my-super-class',
      inputFilled:'my-super-filled-class',
      inputDisabled:'my-super-disabled-class',
      inputSuccess:'my-super-success-class',
      inputError:'my-super-error-class'
    }
  }
  //Otp change using
  handleOtpChange(value:any[]):void{
    // console.log(value);
  }
  //otp file handling
  handleFillEvent(value:any){
    console.log(typeof(value));
    console.log(typeof(this.otp));
    this.enterOtp=value
    if(parseInt(value)==this.otp){
      console.log('hiii');
    }else{
      console.log(value);
      this.error=true;
      console.log(this.error,'this is ereror');
    }
  }

  //countdown function 
  handleEvent(e: CountdownEvent) {
this.countEnd=true
    this.notify = e.action.toUpperCase();
    if (e.action === 'done') {
      this.countEnd=false
    }
    console.log(this.notify,'time left');
    
    
    
    
}
}
