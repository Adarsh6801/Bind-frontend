import { Component } from '@angular/core';

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


}
