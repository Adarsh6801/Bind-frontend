import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_COURSE, ADD_TOPICS, ALL_COURSE, DELETE_COURSE } from 'src/app/shared/constants/urls';

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
}
