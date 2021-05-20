import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { AssociationsComponent } from './browse/associations/associations.component';
import { TrainersComponent } from './browse/trainers/trainers.component';
import { CompaniesComponent } from './browse/companies/companies.component';
import { ComingEventsComponent } from './browse/coming-events/coming-events.component';
import { ReadMoreComponent } from './browse/coming-events/read-more/read-more.component'


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
    CommonModule
  ],
  exports: [
    NavbarComponent,
    ComingEventsComponent,
    AssociationsComponent,
    TrainersComponent,
    CompaniesComponent,]
})
export class SharedModule { }
