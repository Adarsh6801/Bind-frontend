import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BLOCK_USER, GET_ALL_USERS, SINGLE_USER, UNBLOCK_USER } from 'src/app/shared/constants/urls';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }

  getAllUsers():Observable<any>{
    return this.http.get(GET_ALL_USERS)
  }
  blockUser(id:any):Observable<any>{
    return this.http.get(BLOCK_USER+`/${id}`)
  }
  unblockUser(id:any):Observable<any>{
    return this.http.get(UNBLOCK_USER+`/${id}`)
  }
  getUserById(id:any):Observable<any>{
    console.log(id,'user role id');
    return this.http.get(SINGLE_USER+`/${id}`)
  }
}
