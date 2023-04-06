import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';
import { Message } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users!: any[];
  selectedUser:any;
  filteredUsers!:any[];
  showsUser!:any[];
  isBlocked!: boolean;
  messages!: Message[];
  constructor(private userService:UserServiceService,private cdr: ChangeDetectorRef, private router:Router){}

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe((response)=>{
      this.users=response.userId
      this.filteredUsers = this.users;
      console.log(this.users,'all-users');
    })
    
  }
  status(block:boolean){
    this.isBlocked=block
    return this.isBlocked

  }
  filteredUser(event: any){
    if (this.selectedUser !== '') {
      let filtered: any[] = [];
      let query = event.query;
      for (let i = 0; i < this.users.length; i++) {
                let user = this.users[i];
                if (user.userId.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                    filtered.push(user);
                }
            }
            this.showsUser=filtered;
            this.filteredUsers=filtered;
    }
    else{
      this.filteredUsers=this.users
    }
  }
  clearFilter() {
    this.filteredUsers = this.users; // reset filteredUsers to all users
  }
  toggleBlockUser(user: any): void {
    if (user.userId.status) {
      this.userService.blockUser(user.userId._id).subscribe((response: any) => {
        console.log(response,'response');
        this.isBlocked=true;
        this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
        this.router.navigateByUrl('/auth/all-users')
        this.cdr.detectChanges(); // update the UI
        user.userId.status = false;
      });
    } else {
     
      this.userService.unblockUser(user.userId._id).subscribe((response:any)=>{
        console.log(response,'res');
        this.isBlocked=false;
        this.messages = [{ severity: 'success', summary: 'Success', detail: response.msg }];
        this.cdr.detectChanges();
        this.users= response;
        user.userId.status = true;
      })
    }
  }

}
