import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ADD_PROGRAM, ALL_PROGRAM, REMOVE_PROGRAM } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class ProgramService {

  constructor(private http : HttpClient) { }

  addProgram(data:any):Observable<any>{
    return this.http.post(ADD_PROGRAM,data)
  }
  getAllProgram():Observable<any>{
    return this.http.get(ALL_PROGRAM)
  }
  deleteProgram(id:string):Observable<any>{
    return this.http.get(REMOVE_PROGRAM+`/${id}`)
  }

}
