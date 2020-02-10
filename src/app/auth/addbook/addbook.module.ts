import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddbookComponent } from './addbook.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule,MatNativeDateModule,MatFormFieldModule,MatDatepickerModule,MatExpansionModule,MatGridListModule,MatRadioModule,MatSidenavModule,MatToolbarModule,MatButtonModule,MatCardModule,MatTooltipModule,MatIconModule,MatBadgeModule,MatProgressSpinnerModule, MatInput } from '@angular/material';
import {FormsModule} from '@angular/forms';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import '../../navbars/navbars.component'
import '../../footer/footer.component'
const routes: Routes= [{
  path: '',
  component:AddbookComponent
}];

@NgModule({
  declarations: [
    AddbookComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    MDBBootstrapModule,MatRadioModule
  ],schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
})
export class AddbookModule { }
