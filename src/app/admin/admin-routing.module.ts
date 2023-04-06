import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';
import { UsersListComponent } from './users-list/users-list.component';
import { MentorListComponent } from './mentor-list/mentor-list.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent,children:[
    {path:'home',component:HomeComponent},
    {path:'all-users',component:UsersListComponent},
    {path:'all-mentors',component:MentorListComponent}
  ],canActivate:[AdminAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
