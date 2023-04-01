import { GoogleLoginProvider, SocialAuthService } from '@abacritt/angularx-social-login';
import { SocialUser } from "@abacritt/angularx-social-login";
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { AuthServicesService } from '../auth-services.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-social',
  templateUrl: './login-social.component.html',
  styleUrls: ['./login-social.component.css']
})
export class LoginSocialComponent implements OnInit {
  user!: SocialUser;
  loggedIn!: boolean;
  socialAuthService: any;
  @Output() userBlockError = new EventEmitter<string>();


  constructor(private authService: SocialAuthService,private service :AuthServicesService, private router:Router) { }
  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      const userDetail={
        name:this.user.name,
        email:this.user.email,
        idToken:this.user.idToken,
        profilePhotoUrl:this.user.photoUrl,
        loginType:this.user.provider
      }
     this.service.socialLogin(userDetail).subscribe((data)=>{
      console.log(data);
      
      if(data.status){
       if(data.isMentor){
        this.router.navigateByUrl('/mentor/home')
       }else{
        this.router.navigateByUrl('/user/home')
       }
      }else{
        console.log('hi the user is blocked');
        
        this.userBlockError.emit("The user isi blocked");
      }
      
     })
      
    });
  }

} 