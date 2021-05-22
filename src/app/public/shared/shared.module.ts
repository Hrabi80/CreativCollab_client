import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { AssociationsComponent } from './browse/associations/associations.component';
import { TrainersComponent } from './browse/trainers/trainers.component';
import { CompaniesComponent } from './browse/companies/companies.component';
import { ComingEventsComponent } from './browse/coming-events/coming-events.component';
import { ReadMoreComponent } from './browse/coming-events/read-more/read-more.component'
import { RouterModule, Routes } from '@angular/router';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarComponent,
    MessageComponent,
    AssociationsComponent,
    TrainersComponent,
    CompaniesComponent,
    ComingEventsComponent,
    ReadMoreComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule
   
  ],
  exports: [
    NavbarComponent,
    ComingEventsComponent,
    AssociationsComponent,
    TrainersComponent,
    CompaniesComponent,
    AssociationsComponent]
})
export class SharedModule { }
