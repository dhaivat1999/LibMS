import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddbookComponent } from './addbook/addbook.component';
import { LogoutComponent } from './logout/logout.component';


const routes: Routes = [
    {
        path:'addbook',component:AddbookComponent
    },
    {
        path:'logout',component:LogoutComponent
    }

];