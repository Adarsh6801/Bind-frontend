import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { UsersListComponent } from './users-list/users-list.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';
import { ProgramPageComponent } from './program-page/program-page.component';
import { CoursePageComponent } from './course-page/course-page.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddTopicsComponent } from './add-topics/add-topics.component';
import { UserPageComponent } from './user-page/user-page.component';
import { SubscriptionPageComponent } from './subscription-page/subscription-page.component';
import { LanguagePageComponent } from './language-page/language-page.component';
import { EditCourseComponent } from './edit-course/edit-course.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'all-users', component: UsersListComponent },
      { path: 'all-mentors', component: MentorListComponent },
      { path: 'program', component: ProgramPageComponent },
      { path: 'language', component: LanguagePageComponent },
      { path: 'course', component: CoursePageComponent },
      { path: 'add-course', component: AddCourseComponent },
      { path: 'add-topics', component: AddTopicsComponent },
      { path: 'user/:id', component: UserPageComponent },
      { path: 'mentor-subscription', component: SubscriptionPageComponent },
      { path: 'course/edit-course/:id',component: EditCourseComponent },
    ],
    canActivate: [AdminAuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
