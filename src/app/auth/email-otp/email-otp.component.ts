import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { NgxOtpInputConfig } from 'ngx-otp-input/public-api';
import { Message } from 'primeng/api';
import { AuthServicesService } from '../auth-services.service';

@Component({
  selector: 'app-email-otp',
  templateUrl: './email-otp.component.html',
  styleUrls: ['./email-otp.component.css'],
})
export class EmailOtpComponent {
  constructor(
    private authService: AuthServicesService,
    private router: Router
  ) {}
  //header of the otp page
  header: string = 'Email';

  messages1!: Message[];
  messages2!: Message[];
  // error variable
  error: boolean = false;
  enterOtp!: any;

  //otp countdown
  countEnd: boolean = true;
  notify = '';
  config: CountdownConfig = { leftTime: 120, notify: [1] };

  // ngx otp input
  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: 'my-super-box-class',
      input: 'my-super-class',
      inputFilled: 'my-super-filled-class',
      inputDisabled: 'my-super-disabled-class',
      inputSuccess: 'my-super-success-class',
      inputError: 'my-super-error-class',
    },
  };
  //Otp change using
  handleOtpChange(value: any[]): void {
    // console.log(value);
  }
  //otp file handling
  handleFillEvent(value: any) {
    this.enterOtp = {
      otp: value,
    };
    console.log(this.enterOtp);
    console.log(typeof value);
    this.authService.otpVerification(this.enterOtp).subscribe((data) => {
      if (data.status) {
        this.router.navigateByUrl('/auth/login');
      } else {
        this.messages2 = [
          { severity: 'error', summary: 'Error', detail: data.msg },
        ];
      }
    });
  }

  //countdown function OTP EXPIRES
  handleEvent(e: CountdownEvent) {
    this.countEnd = true;
    this.notify = e.action.toUpperCase();
    if (e.action === 'done') {
      this.countEnd = false;
    }
    if (this.notify == 'DONE') {
      this.authService.otpExpires().subscribe((data) => {
        if(!data.status){
          this.messages2 = [
            { severity: 'error', summary: 'Error', detail: 'Otp is expired' },
          ];
          this.messages1=[];
          this.notify="";
        }
      });
      
    }
  }

  //resend otp
restart(){
  this.authService.otpResend().subscribe((data)=>{
    this.messages2=[]
    console.log(data);
    if(data.status){
      this.messages1 = [
        { severity: 'success', summary: 'Success', detail: "Email sent Succesfuly" },
    ];
    }

    
  })
}
}
