import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';


@NgModule({
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    HomeComponent,
    
  ],
  providers:[
    AdminAuthGuard
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,

    RouterModule,
  ]
})
export class AdminModule { }
