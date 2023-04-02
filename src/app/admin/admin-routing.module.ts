import { NgModule } from '@angular/core';
import { RouterModule, Routes,  } from '@angular/router';
import { AdminComponent } from './admin.component';
import { HomeComponent } from './home/home.component';
import { AdminAuthGuard } from '../guards/admin-auth.guard';

const routes: Routes = [
  {path:'admin',component:AdminComponent,children:[
    {path:'home',component:HomeComponent}
  ],canActivate:[AdminAuthGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
