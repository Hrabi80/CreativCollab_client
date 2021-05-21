import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { DescriptionSectionComponent } from './description-section/description-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
import { AppModule } from 'src/app/app.module';
import { SharedModule } from '../shared/shared.module';
import { TimelineComponent } from './timeline/timeline.component';
import { GalerieComponent } from './galerie/galerie.component';
import { TrainerModule } from 'src/app/trainer/trainer.module';
@NgModule({
  declarations: [
    SideBarComponent,
    ProfileComponent,
    DescriptionSectionComponent,
    ContactSectionComponent,
    TimelineComponent,
    GalerieComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    TrainerModule
  ]
})
export class ProfileModule { }
