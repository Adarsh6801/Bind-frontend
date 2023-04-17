import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ALL_COURSE } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http : HttpClient) { }
  getAllCourse():Observable<any>{
    return this.http.get(ALL_COURSE)
  }
}
