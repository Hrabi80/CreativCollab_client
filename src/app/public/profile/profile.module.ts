import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { DescriptionSectionComponent } from './description-section/description-section.component';
import { ContactSectionComponent } from './contact-section/contact-section.component';
@NgModule({
  declarations: [
    SideBarComponent,
    ProfileComponent,
    DescriptionSectionComponent,
    ContactSectionComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
