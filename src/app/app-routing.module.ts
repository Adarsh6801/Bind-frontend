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
import { CoursesPageComponent } from './user/courses-page/courses-page.component';
import { CourseSinglePageComponent } from './user/course-single-page/course-single-page.component';
import { CategoryViewComponent } from './user/category-view/category-view.component';
import { CourseSelectGuard } from './guards/course-select.guard';
import { CourseAfterSelectComponent } from './user/course-after-select/course-after-select.component';
import { CheckoutPageComponent } from './user/checkout-page/checkout-page.component';

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
      { path:'home',component:HomeComponent },
      {path:'courses', component:CoursesPageComponent,canActivate:[CourseSelectGuard]},
      {path:'course-view/:id',component:CourseSinglePageComponent},
      {path:'category-view/:id',component:CategoryViewComponent},
      {path:'current-course',component:CourseAfterSelectComponent},
      {path:'checkout-page',component:CheckoutPageComponent},
    ],canActivate:[AuthGuardGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
