import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {MatIconModule} from '@angular/material/icon';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    DividerModule,
    DropdownModule,
    AvatarModule,
    BadgeModule,
    MatMenuModule
  ]
})
export class UserModule { }