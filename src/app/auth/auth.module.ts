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
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from '@abacritt/angularx-social-login';
import { SocialLoginModule, SocialAuthServiceConfig } from '@abacritt/angularx-social-login';
import { GoogleSigninButtonModule } from '@abacritt/angularx-social-login';

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
    MessagesModule,
    SocialLoginModule,
    GoogleSigninButtonModule
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '470281030037-u1lk6olst2iqrr1jheevjij3vu1di7aa.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('470281030037-u1lk6olst2iqrr1jheevjij3vu1di7aa.apps.googleusercontent.com')
          }
        ],
        onError: (err) => {
          console.error(err);
        }
      } as SocialAuthServiceConfig,
    }
  ],
  exports:[
    RegisterComponent,
    EmailOtpComponent,

  ]
})
export class AuthModule { }
