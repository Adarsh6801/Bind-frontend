import { Component } from '@angular/core';
import { AuthServicesService } from 'src/app/auth/auth-services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  home:boolean=false;
  course:boolean=false;
  mentor:boolean=false;
  aboutus:boolean=false;
  title = 'app';

  constructor(public authservice :AuthServicesService){}
  
}
