import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatInputModule,MatNativeDateModule,MatFormFieldModule,MatDatepickerModule,MatExpansionModule,MatGridListModule,MatRadioModule,MatSidenavModule,MatToolbarModule,MatButtonModule,MatCardModule,MatTooltipModule,MatIconModule,MatBadgeModule,MatProgressSpinnerModule, MatInput } from '@angular/material';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from 'src/app/admin/footer/footer.component';
import { HeaderComponent } from 'src/app/admin/header/header.component';
import '../../navbars/navbars.component';
import  '../../footer/footer.component'
const routes: Routes = [{
  path: '',
  component:LoginComponent
}];
@NgModule({
  declarations: [
    LoginComponent,  FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
      RouterModule.forChild(routes),
      MDBBootstrapModule.forRoot(),
      MatIconModule,
      FormsModule,
    
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class LoginModule { }
