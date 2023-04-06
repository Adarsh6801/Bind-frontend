import { Component, OnInit } from '@angular/core';
import { MentorServiceService } from '../service/mentor-service.service';
import { Message } from 'primeng/api';
import { response } from 'express';

@Component({
  selector: 'app-mentor-list',
  templateUrl: './mentor-list.component.html',
  styleUrls: ['./mentor-list.component.css']
})
export class MentorListComponent implements OnInit{
  constructor(private service : MentorServiceService){}
  mentors!: any[];
  messages!: Message[];
  messages1!: Message[];

  visible!: boolean;
  requestMentors!:any[];
  requestNumber!:number;
  ngOnInit(): void {
   this.allMentors()
   this.allrequestMentors()
  

  }
  allMentors(){
    this.service.getAllMentors().subscribe((response)=>{
      console.log(response);
      this.mentors=response.userId
    })
  }
  allrequestMentors(){
    this.service.getAllRequestedMentors().subscribe((response)=>{
      console.log(response,'response..');
      this.requestMentors=response.user
      this.requestNumber=this.requestMentors.length
    })
  }

  toggleBlockMentor(user: any): void {
    if (user.userId.status) {
      this.service.blockMentors(user.userId._id).subscribe((response: any) => {
        console.log(response,'response');
        this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
        user.userId.status = false;
      });
    } else {
     
      this.service.unblockMentors(user.userId._id).subscribe((response:any)=>{
        console.log(response,'res');

        this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
        user.userId.status = true;
      })
    }
  }
  MentorRemove(user:any){    
    this.service.removeMentor(user._id).subscribe((response)=>{
      console.log(response,'remove response');
      this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
      user.userId.status = true;
      this.allMentors()
    })
  }
  showDialog() {
    this.visible = true;
}
acceptUser(roleid:any){
  this.service.acceptMentor(roleid).subscribe((response)=>{
    this.allrequestMentors()
    this.allMentors()
    console.log(response);
    this.messages1 = [{ severity: 'success', summary: 'Success', detail: response.msg }];
    
  })
}
declineUser(roleid:any){
  this.service.declineMentor(roleid).subscribe((response)=>{
    this.allrequestMentors()
    this.allMentors()
    
  })
}

}
