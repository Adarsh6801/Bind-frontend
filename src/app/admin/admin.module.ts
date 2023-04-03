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

@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    HomeComponent,
    SidenavComponent,
    
  ],
  providers:[
    AdminAuthGuard
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    RouterModule,

    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    MatSidenavModule,
    MatListModule
  ]
})
export class AdminModule { }
