import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { HomeComponent } from './home/home.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { UsersListComponent } from './users-list/users-list.component';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MessagesModule } from 'primeng/messages';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { ProgramPageComponent } from './program-page/program-page.component';
import { CloudinaryModule } from '@cloudinary/ng';
import { CoursePageComponent } from './course-page/course-page.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

import { AddCourseComponent } from './add-course/add-course.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { LanguagePageComponent } from './language-page/language-page.component';

import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environment/environment';
import { EditCourseComponent } from './edit-course/edit-course.component';

@NgModule({
  declarations: [
    UserPageComponent,
    AdminComponent,
    AdminHeaderComponent,
    HomeComponent,
    SidenavComponent,
    UsersListComponent,
    MentorListComponent,
    ProgramPageComponent,
    CoursePageComponent,
    AddCourseComponent,
    AddTopicsComponent,
    SubscriptionPageComponent,
    LanguagePageComponent,
    EditCourseComponent,
  ],
  providers: [AdminAuthGuard],
  imports: [
    CommonModule,
    AdminRoutingModule,

    RouterModule,
    FormsModule,
    ReactiveFormsModule,

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
    BadgeModule,
    CloudinaryModule,
    InputNumberModule,
    InputTextModule,
    DropdownModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,

    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
})
export class AdminModule {}
