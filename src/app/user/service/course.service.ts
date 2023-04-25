import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {  Router } from '@angular/router';
import { ALL_COURSE, COURSE_VIEW_BY_ID, EXIT_FROM_COURSE, GET_COURSE_WITHOUT_MENTOR, GET_COURSE_WITH_MENTOR, GET_CURRENT_COURSE } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http : HttpClient, private router :Router) { }
  getAllCourse():Observable<any>{
    return this.http.get(ALL_COURSE)
  }
  getCourseById(id:any):Observable<any>{
    return this.http.get(COURSE_VIEW_BY_ID+`/${id}`)
  }
  getCourseWithoutMentor(id:any):Observable<any>{
    console.log(id,'id in service');
    return this.http.get(GET_COURSE_WITHOUT_MENTOR+`/${id}`)
  }
  getCourseWithMentor(id:any):Observable<any>{
    this.router.navigateByUrl('/user/checkout-page')
    return this.http.get(GET_COURSE_WITH_MENTOR+`/${id}`)
  }
  getCurrentCourse():Observable<any>{
    console.log(GET_CURRENT_COURSE,'akfkjf');
    return this.http.get(GET_CURRENT_COURSE)
  }
  exitCourse():Observable<any>{
    return this.http.get(EXIT_FROM_COURSE)
  }

}
