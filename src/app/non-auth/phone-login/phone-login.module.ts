import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneLoginComponent } from './phone-login.component';
import { Routes, RouterModule } from '@angular/router';
import '../../footer/footer.component';
import '../../navbars/navbars.component'
import { FormsModule } from '@angular/forms';
const routes: Routes = [{
  path: '',
  component:PhoneLoginComponent
}];

@NgModule({
  declarations: [
    PhoneLoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class PhoneLoginModule { }
