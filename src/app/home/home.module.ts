import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ShowBookComponent} from './show-book/show-book.component';
import {
ShowBook2Component
} from './show-book2/show-book2.component';
import {HomeComponent} from './home/home.component';
import {ShowBook3Component} from './show-book3/show-book3.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule,Routes } from '@angular/router';
// import { AppModule } from '../app.module';
import '../footer/footer.component'
const routes: Routes = [{
  path: '',
  component:HomeComponent
},
{
  path:'showbook',
  component:ShowBookComponent
}]
@NgModule({
  declarations: [
    HomeComponent,
    ShowBook2Component,
    ShowBookComponent,
    ShowBook3Component
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    // AppModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas:[
CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule { }
