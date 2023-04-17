import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';

import {MatIconModule} from '@angular/material/icon';
import { DividerModule } from 'primeng/divider';
import { DropdownModule } from 'primeng/dropdown';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import {MatMenuModule} from '@angular/material/menu';
import { FooterComponent } from './footer/footer.component';
import { AuthServicesService } from 'src/app/auth/auth-services.service';
import { AuthModule } from '../auth/auth.module';
import { CarouselComponent } from './carousel/carousel.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';

@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    CoursesPageComponent,
    
  ],
  providers: [
    AuthServicesService
  ],
  imports: [
    AuthModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    DividerModule,
    DropdownModule,
    AvatarModule,
    BadgeModule,
    MatMenuModule,
    TableModule,
    
  ]
})
export class UserModule { }
