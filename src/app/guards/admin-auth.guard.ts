import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServicesService } from '../auth/auth-services.service';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private authservice : AuthServicesService, private _router : Router){}
  canActivate():boolean{
if(this.authservice.isAdminCheck()){
  return true
}else{
  this._router.navigate(['/'])
  return false
}
  }
}
