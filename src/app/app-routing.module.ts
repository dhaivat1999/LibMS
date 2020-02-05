import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './non-auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home/home.component';
import { ShowBook3Component } from './show-book3/show-book3.component';


const routes: Routes = [
  // {
  //   path:'signup',component:SignupComponent
  // },
  {
    path:'showbook',component:ShowBook3Component
  }
  // },
  // {
  //   path: '**',
  //   component:PageNotFoundComponent
  // }
  // {
  //  path:'',
  //  component:HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
