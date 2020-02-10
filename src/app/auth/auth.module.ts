import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';

const routes: Routes= [{
  path: '',
  redirectTo: 'addbook'
},
{
  path: 'logout',
  loadChildren: './logout/logout.module#LogoutModule'
},
{
  path: 'addbook',
  loadChildren: './addbook/addbook.module#AddbookModule'
}];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  
  ]
})
export class AuthModule { }
