import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ShowBook3Component } from './show-book3/show-book3.component';


const routes: Routes =[
    {
        path:'',
        redirectTo:'addbook'
    }
    ,{
    path: 'addbook',
    loadChildren:'./addbook/addbook.module#AddbookModule'
  },
  {
    path:'logout',
    loadChildren:'./logout/logout.module#LogoutModule'
  }
  ];

export const AuthRouting : ModuleWithProviders = RouterModule.forChild(routes); 
