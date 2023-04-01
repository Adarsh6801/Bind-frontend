import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { OTP_EXPIRES_URL, OTP_RESEND_URL, OTP_VERIFY_URL, SOCIAL_LOGIN_URL, USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IuserLogin';
import { IUserRegister } from '../shared/interfaces/IuserRegister';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private userSubject=new BehaviorSubject<User>(new User())
  public userObservable:Observable<User>
  constructor(private http:HttpClient) { 
    this.userObservable=this.userSubject.asObservable();
  }
  login(userLogin:IUserLogin):Observable<User>{
   return this.http.post<User>(USER_LOGIN_URL,userLogin)
  }
  register(userRegister:IUserRegister):Observable<User>{
    return this.http.post<User>(USER_REGISTER_URL,userRegister)
  }
  otpVerification(otp:any):Observable<any>{
    console.log(typeof(otp),"type type");
    
    return this.http.post<number>(OTP_VERIFY_URL,otp)

  }
  otpExpires():Observable<any>{
    return this.http.get(OTP_EXPIRES_URL)
  }
  otpResend():Observable<any>{
    return this.http.get(OTP_RESEND_URL)
  }
  socialLogin(socialUser:any):Observable<User>{
    console.log(socialUser,"asdfaasdf");
    return this.http.post<User>(SOCIAL_LOGIN_URL,socialUser)
  }
}
