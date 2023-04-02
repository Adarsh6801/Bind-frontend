import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { EmailOtpComponent } from './auth/email-otp/email-otp.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { LandingPageComponent } from './common/landing-page/landing-page.component';
import { HomeComponent } from './user/home/home.component';

import { UserComponent } from './user/user.component';
import { ForgotChagePassComponent } from './auth/forgot-chage-pass/forgot-chage-pass.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';

const routes: Routes = [
  {
    path:'',component:LandingPageComponent
  },

  {
    path: 'auth',
    component: AuthComponent,
    children: [
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
      { path: 'otpverify',component:EmailOtpComponent},
      { path: 'changepass',component:ForgotChagePassComponent}
    ],
  },
  {
    path:'user',
    component:UserComponent,
    children:[
      { path:'home',component:HomeComponent }
      
    ],canActivate:[AuthGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
