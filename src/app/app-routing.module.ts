import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AccompagnementComponent } from './pages/accompagnement/accompagnement.component';
import {MentorComponent} from './pages/mentor/mentor.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'accompagnement',
    component: AccompagnementComponent
  },
  {
    path: 'mentors',
    component: MentorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
