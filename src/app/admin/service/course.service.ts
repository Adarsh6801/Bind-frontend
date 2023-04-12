import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_COURSE } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) { }
  
  addCourse(data:any):Observable<any>{
    console.log(data,'dataa');
    return this.http.post(ADD_COURSE,data)
  }

}
