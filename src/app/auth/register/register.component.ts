import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUserLogin } from '../../shared/interfaces/IuserLogin'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /*registerForm setuped*/
  registerForm!:FormGroup;
  submitted:boolean=false;
  loader:boolean=false;
  conformPass:boolean=false;


  constructor(private formBuilder:FormBuilder){ }

  ngOnInit(): void {
    //validators
  this.registerForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    name:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(4)]],
    repassword:['',Validators.required]
  })
  this.registerForm.value.password=null;
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return 
    }
    else if(this.registerForm.value.password!=this.registerForm.value.repassword && this.registerForm.value.password){
      this.conformPass=true;
      return
    }
    else if(this.registerForm.valid){
      this.conformPass=false;
      this.loader=true;
      console.log(this.registerForm.value);
      
    }
  }
}
