import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ACCEPT_MENTOR, DECLINE_MENTOR } from 'src/app/shared/constants/urls';
import { BLOCK_MENTOR, GET_ALL_MENTORS, GET_ALL_MENTOR_REQUESTS, REMOVE_MENTOR, UNBLOCK_MENTOR } from 'src/app/shared/constants/urls';

@Injectable({
  providedIn: 'root'
})
export class MentorServiceService {

  constructor(private http : HttpClient) { }
  getAllMentors():Observable<any>{
    return this.http.get(GET_ALL_MENTORS)
  }
  getAllRequestedMentors():Observable<any>{
    return this.http.get(GET_ALL_MENTOR_REQUESTS)
  }
  blockMentors(id:any):Observable<any>{
    return this.http.get(BLOCK_MENTOR+`/${id}`)
  }
  unblockMentors(id:any):Observable<any>{
    return this.http.get(UNBLOCK_MENTOR+`/${id}`)
  }
  removeMentor(roleid:any):Observable<any>{
    console.log(roleid,'roleid');
    return this.http.get(REMOVE_MENTOR+`/${roleid}`)
  }
  acceptMentor(roleid:any):Observable<any>{
    return this.http.get(ACCEPT_MENTOR+`/${roleid}`)
  }
  declineMentor(roleid:any):Observable<any>{
    return this.http.get(DECLINE_MENTOR+`/${roleid}`)
  }
}
