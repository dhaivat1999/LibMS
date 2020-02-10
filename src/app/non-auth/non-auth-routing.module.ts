import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ShowBook3Component } from './show-book3/show-book3.component';


const routes: Routes = [{
    path: '',
    redirectTo: 'login'
},
{
    path: 'login',
    loadChildren: './login/login/module#LoginModule'
},
{
    path: 'signup',
    loadChildren: './signup/signup.module#SignupModule'
}];

// export const NonAuthRouting: ModuleWithProviders = RouterModule.forChild(routes); 