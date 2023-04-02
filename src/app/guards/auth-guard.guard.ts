import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from '../auth/auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
constructor(private AuthService:AuthServicesService, private _router:Router){}
canActivate():boolean{
  if(this.AuthService.isLoggedIn()){
    return true
  }
  else{
    this._router.navigate(['/auth/login'])
    return false
  }
}
  
}
