import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { TableModule } from 'primeng/table';

import { MessagesModule } from 'primeng/messages';
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
import { AdminModule } from '../admin/admin.module';
import { CourseSinglePageComponent } from './course-single-page/course-single-page.component';
import { CategoryViewComponent } from './category-view/category-view.component';
import { FormsModule } from '@angular/forms';
import {MatTabsModule} from '@angular/material/tabs';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { CourseAfterSelectComponent } from './course-after-select/course-after-select.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    UserComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    CarouselComponent,
    CoursesPageComponent,
    CourseSinglePageComponent,
    CategoryViewComponent,
    CourseAfterSelectComponent,
    CheckoutPageComponent,
    
  ],
  providers: [
    AuthServicesService,
  ],
  imports: [
    AuthModule,
    AdminModule,
    CommonModule,
    RouterModule,
    MatIconModule,
    DividerModule,
    DropdownModule,
    AvatarModule,
    BadgeModule,
    MatMenuModule,
    TableModule,
    FormsModule,
    MessagesModule,
    MatTabsModule,
    DialogModule,
    ButtonModule,
    ReactiveFormsModule
    
  ]
})
export class UserModule { }
