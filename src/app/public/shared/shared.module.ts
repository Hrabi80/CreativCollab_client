import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { RouterModule, Routes } from '@angular/router';
//import { SharedRoutingModule } from './shared-routing.module';




@NgModule({
  declarations: [NavbarComponent, MessageComponent],
  imports: [
    CommonModule,
    RouterModule
    //SharedRoutingModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
