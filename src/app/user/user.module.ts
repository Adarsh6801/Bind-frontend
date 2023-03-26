import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ]
})
export class UserModule { }
