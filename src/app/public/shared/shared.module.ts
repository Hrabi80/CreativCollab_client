import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { AssociationsComponent } from './browse/associations/associations.component';
import { TrainersComponent } from './browse/trainers/trainers.component';
import { CompaniesComponent } from './browse/companies/companies.component';
import { ComingEventsComponent } from './browse/coming-events/coming-events.component';
import { ReadMoreComponent } from './browse/coming-events/read-more/read-more.component'
import { RouterModule} from '@angular/router';
import {ReactiveFormsModule } from '@angular/forms';
import { EventDetailsComponent } from './browse/event-details/event-details.component';



@NgModule({
  declarations: [
    NavbarComponent,
    MessageComponent,
    AssociationsComponent,
    TrainersComponent,
    CompaniesComponent,
    ComingEventsComponent,
    ReadMoreComponent,
    EventDetailsComponent
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
