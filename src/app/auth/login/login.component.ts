import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthServicesService } from '../auth-services.service';
import {Router} from "@angular/router"
import { Message } from 'primeng/api';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  isSubmitted=false;
  error:string=''
  messages2!: Message[];
  messages!: Message[];
  constructor(private formBuilder:FormBuilder, private authService:AuthServicesService, private router :Router ){}
  ngOnInit(): void {
   this.loginForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
   })
  }
  get fc(){
    return this.loginForm.controls;
  }
  submit(){
    this.isSubmitted=true;
    if(this.loginForm.invalid) return;
    this.authService.login(this.loginForm.value).subscribe((data)=>{
      
      if(data.status){
        if(data.isAdmin){
          this.messages = [{ severity: 'success', summary: 'Success', detail: 'Logined Succesfully' }];
          //settimeout
          this.router.navigateByUrl('/admin/home')

        }else if(data.isMentor){
          this.messages = [{ severity: 'success', summary: 'Success', detail: 'Logined Succesfully' }];
          this.router.navigateByUrl('/mentor/home')
        }else{
          this.messages = [{ severity: 'success', summary: 'Success', detail: 'Logined Succesfully' }];
          this.router.navigateByUrl('/user/home')
        }
      }else{
        this.messages2 = [
          { severity: 'error', summary:'Error', detail: data.error },
      ];
      }
      
      
    })
   
  }
  errorMsg(err:any){
    this.messages2 = [
      { severity: 'error', summary:'Error', detail: err },
  ];
  }
}
