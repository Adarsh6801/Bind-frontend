import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { GET_PROGRAMS_BY_ID, USER_HAS_CURRENT_COURSE } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getProgramById(program:any):Observable<any>{
    console.log(program,'program...');
    
    return this.http.get(GET_PROGRAMS_BY_ID+`/${program}`)
  }
}
