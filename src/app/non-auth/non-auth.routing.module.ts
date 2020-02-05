import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PhoneLoginComponent } from './phone-login/phone-login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
    {
        path:'login',component:LoginComponent
    },
    {
        path:'phone-login',component:PhoneLoginComponent
    },
    {
        path:'signup',component:SignupComponent
    }
];