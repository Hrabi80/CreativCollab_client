import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [NavbarComponent, MessageComponent],
  imports: [
    CommonModule
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
