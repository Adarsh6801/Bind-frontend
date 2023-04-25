import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_COURSE, ADD_TOPICS, ALL_COURSE, DELETE_COURSE, EDIT_COURSE, GET_COURSE_BY_ID, GET_USER,  } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  
  addCourse(data:any):Observable<any>{
    return this.http.post(ADD_COURSE,data)
  }
  getAllCourse():Observable<any>{
    return this.http.get(ALL_COURSE)
  }
  deleteCourse(id:string):Observable<any>{
    return this.http.get(DELETE_COURSE+`/${id}`)
  }
  addTopics(data:any):Observable<any>{
    console.log(data,'dataa');
    
    return this.http.post(ADD_TOPICS,data)
  }
  getCourseById(id:any):Observable<any>{
    console.log(id,'this is the id');
    return this.http.get(GET_COURSE_BY_ID +`/${id}`)
  }
  updatCourse(data:any):Observable<any>{
    console.log(data,'dataaa');
    return this.http.post(EDIT_COURSE,data)
  }
  checkUserHasCurrentCourse():Observable<any>{
    console.log("hello");
  return  this.http.get(GET_USER);
  }
}
