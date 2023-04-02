import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CountdownConfig, CountdownEvent } from 'ngx-countdown';
import { NgxOtpInputConfig } from 'ngx-otp-input';
import { Message } from 'primeng/api';
import { AuthServicesService } from '../auth-services.service';

@Component({
  selector: 'app-forgot-chage-pass',
  templateUrl: './forgot-chage-pass.component.html',
  styleUrls: ['./forgot-chage-pass.component.css']
})
export class ForgotChagePassComponent {
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

      
    }
  }

  //resend otp
restart(){

}
}
