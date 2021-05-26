import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  isconnected:boolean=true;
  user!:user;
  id!:string;
  
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {
    this.isconnected= this.authservice.loggedIn();
    console.log("now ",this.isconnected);
   if(this.isconnected){
     this.id = this.authservice.getUserIdFromLocalStorage();
     console.log("my id is ", this.id);
   }
  }

}
