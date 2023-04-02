import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { OTP_EXPIRES_URL, OTP_RESEND_URL, OTP_VERIFY_URL, SOCIAL_LOGIN_URL, USER_LOGIN_URL, USER_REGISTER_URL } from '../shared/constants/urls';
import { IUserLogin } from '../shared/interfaces/IuserLogin';
import { IUserRegister } from '../shared/interfaces/IuserRegister';
import { User } from '../shared/models/user';
import { response } from 'express';
import { Router } from '@angular/router';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {
  private userSubject=new BehaviorSubject<User>(new User())
  public userObservable:Observable<User>
  private _isLoggedIn$=new BehaviorSubject<boolean>(false);
  isLoggedIn$=this._isLoggedIn$.asObservable();
  isAdmin:boolean=false;
  isMentor:boolean=false;


  constructor(private http:HttpClient, private route : Router) { 
    this.userObservable=this.userSubject.asObservable();
    const token=localStorage.getItem('auth_token')
    this._isLoggedIn$.next(!!token)
  }

  login(userLogin:IUserLogin):Observable<User>{
   return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
    tap((response:any)=>{
      this._isLoggedIn$.next(true)
      localStorage.setItem('auth_token',response.token)
      this.isAdmin=response.isAdmin
      this.isMentor=response.isMentor
      console.log(response,'response of the response....');
      
    })
   )
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
  isLoggedIn():boolean{
    const token=localStorage.getItem('auth_token')
    if(token){
      const decodedToken:any = jwt_decode(token);
      console.log(decodedToken,'decoded token');
      if(decodedToken.role === 'user'){        
        return true
      }else{
        return false
      }
    }else{
      return false
    }
  }
  // For token get
  getToken(){
     localStorage.getItem('auth_token')

  }
  // for Logout the user
  logout(){
    localStorage.removeItem('auth_token')
    this.route.navigate(['/'])
  }
  // For mentor check
  isMentorCheck(){
    const token:any = localStorage.getItem('auth_token');
    if(token){
      const decodedToken:any = jwt_decode(token);
      console.log(decodedToken,'decoded token');
      if(decodedToken.role === 'mentor'){        
        return true
      }else{
        return false
      }
    }else{
      return false;
    }
  }
  // For Admin Check
  isAdminCheck(){
    const token:any = localStorage.getItem('auth_token');
    if(token){
      const decodedToken:any = jwt_decode(token);
      console.log(decodedToken,'decoded token');
      if(decodedToken.role === 'admin'){        
        return true
      }else{
        return false
      }
    }else{
      return false;
    }
    
  }
}
