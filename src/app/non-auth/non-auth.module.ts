import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule,} from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
// import {NavbarsComponent} from '../navbars/navbars.component';
import '../footer/footer.component'
import  '../navbars/navbars.component'
const routes: Routes = [{
  path: '',
  redirectTo: 'login'
},
{
  path:'signup',
  redirectTo:'signup'
},
{
  path: 'login',
  loadChildren: './login/login.module#LoginModule'
},
{
  path: 'signup',
  loadChildren: './signup/signup.module#SignupModule'
}];

@NgModule({
  declarations: [
    // LoginComponent
    // NavbarsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class NonAuthModule { }
