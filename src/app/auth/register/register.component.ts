import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /*registerForm setuped*/
  registerForm!:FormGroup;
  submitted:boolean=false;


  constructor(private formBuilder:FormBuilder){ }

  ngOnInit(): void {
    //validators
  this.registerForm=this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    name:['',[Validators.required,Validators.minLength(4)]],
    password:['',[Validators.required,Validators.minLength(4)]]
  })
  }
  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid){
      return 
    }
    
  }

  
}
