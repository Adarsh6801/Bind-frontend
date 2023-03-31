import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { LoginSocialComponent } from './login-social/login-social.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { EmailOtpComponent } from './email-otp/email-otp.component';
import { FormsModule } from '@angular/forms';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { CountdownModule } from 'ngx-countdown';
import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MessagesModule } from 'primeng/messages';
// import Swal from 'sweetalert2';

@NgModule({
  declarations: [
    RegisterComponent,
    LoginSocialComponent,
    LoginComponent,
    EmailOtpComponent,
    AuthComponent,
    
    
    
   
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    NgxOtpInputModule,
    CountdownModule,
    HttpClientModule,
    MessagesModule
    
    
   
  ],
  exports:[
    RegisterComponent,
    EmailOtpComponent
  ]
})
export class AuthModule { }
