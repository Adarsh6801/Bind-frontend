import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, first, map, of } from 'rxjs';
import { response } from 'express';
import { Router } from '@angular/router';
import { CourseService } from '../admin/service/course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseSelectGuard implements CanActivate {
  constructor( private CourseService: CourseService,private _router: Router){}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.CourseService.checkUserHasCurrentCourse().pipe(
      map((response) => {
        const user = response.user;
        if (!user.userId.currentCourse) {
          return true;
        } else {
          this._router.navigateByUrl('/user/current-course');
          return false;
        }
      }),
      catchError(() => {
        // Handle any errors from the CourseService
        return of(false);
      }),
      first() // Take the first emitted value and complete the Observable
    );
  }

  
}
