import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { UsersListComponent } from './users-list/users-list.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    HomeComponent,
    SidenavComponent,
    UsersListComponent,
    MentorListComponent,
    
  ],
  providers:[
    AdminAuthGuard
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    RouterModule,
    FormsModule,

    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule,

    AutoCompleteModule,
    MessagesModule,
    DialogModule,
    ButtonModule,
    TableModule,
    BadgeModule
  ]
})
export class AdminModule { }
