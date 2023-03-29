import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MentorComponent } from './mentor.component';


const routes: Routes = [
    {path:'mentor',component:MentorComponent,children:[
        {path:'home',component:HomeComponent}
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MentorRoutingModule {}
