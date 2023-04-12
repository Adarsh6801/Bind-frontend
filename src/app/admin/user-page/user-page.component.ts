import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';
import { response } from 'express';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit{
user!:any[];
isMentor:boolean=false;
  ngOnInit(): void {
    
  }
  constructor(public activatedRoute:ActivatedRoute,public userSer:UserServiceService){
    activatedRoute.params.subscribe((params)=>{
      console.log(params,'params');
      this.userSer.getUserById(params['id']).subscribe((response)=>{
        console.log(response);
        this.user=response.user;
        this.isMentor=response.isMentor;
        console.log(this.user,'user');
        
      })
    })
  }
  

  
}
