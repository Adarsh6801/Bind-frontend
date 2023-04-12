import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_LANGUAGE, ALL_LANGUAGE, REMOVE_LANGUAGE } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  constructor(private http : HttpClient) { }

  addLanguage(data:any):Observable<any>{
    return this.http.post(ADD_LANGUAGE,data)
  }
  getAllLanguage():Observable<any>{
    return this.http.get(ALL_LANGUAGE)
  }
  deleteLanguage(id:string):Observable<any>{
    return this.http.get(REMOVE_LANGUAGE+`/${id}`)
  }

}
