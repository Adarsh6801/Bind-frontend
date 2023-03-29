import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MentorComponent } from './mentor.component';
import { HomeComponent } from './home/home.component';
import { Router, RouterModule } from '@angular/router';
import { MentorRoutingModule } from './mentor-routing.module';
import { HeaderComponent } from './header/header.component';

import {MatIconModule} from '@angular/material/icon';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    MentorComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MentorRoutingModule,
    MatIconModule,
    BadgeModule,
    AvatarModule,
    MatMenuModule,
    DropdownModule
  ]
})
export class MentorModule { }
