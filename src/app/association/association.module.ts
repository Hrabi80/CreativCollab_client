import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateEventComponent } from './create-event/create-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { ViewEventComponent } from './view-event/view-event.component';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';



@NgModule({
  declarations: [CreateEventComponent, EditEventComponent, ViewEventComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
})
export class AssociationModule { }
