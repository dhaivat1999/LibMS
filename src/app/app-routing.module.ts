import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './non-auth/signup/signup.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home/home.component';
import { AuthGuard } from './auth.guard';
// import { ShowBook3Component } from './show-book3/show-book3.component';


const routes: Routes = [
  // {
  //   path:'signup',component:SignupComponent
  // },
  //
  //
  {
    path:'notauth',
    loadChildren:'./unauthorized/unauthorized.module#UnauthorizedModule'
  },
  {
    path: 'non-auth',
    loadChildren: './non-auth/non-auth.module#NonAuthModule',
  },
  {
    path: 'auth',
    loadChildren: './auth/auth.module#AuthModule',
    canActivate: [AuthGuard]
  },
  {
    path: '',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path:'home',
    redirectTo:''
  },
  {
    path: 'page-not-found',
    loadChildren: './page-not-found/page-not-found.module#PageNotFoundModule'
  },
    {
    path:'notauth',
    loadChildren:'./unauthorized/unauthorized.module#UnauthorizedModule'
  },
  {
    path: '**',
    redirectTo: 'page-not-found'
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
