import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss']
})
export class HeroSectionComponent implements OnInit {
  isconnected:boolean=true;
  constructor(private authservice : AuthService) { }

  ngOnInit(): void {
    this.isconnected= this.authservice.loggedIn();
  }

}
