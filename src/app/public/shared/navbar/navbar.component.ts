import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { user } from 'src/app/models/user';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isconnected:boolean=true;
  user!:user;
  id!:string;
  
  constructor(private authservice:AuthService,
              private router : Router) { }

  ngOnInit(): void {
   this.isconnected= this.authservice.loggedIn();
    console.log("now ",this.isconnected);
   if(this.isconnected){
     this.id = this.authservice.getUserIdFromLocalStorage();
     console.log("my id is ", this.id);
   }
   
  }
  @HostListener('document:mousewheel', ['$event'])
  @HostListener('document:keydow', ['$event'])
  @HostListener('document:touchmove', ['$event'])
  ondocumentMousewheel(event: any) {
    let element = document.querySelector('.header');
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
      element!.classList.add('navdown');
    } else {

      element!.classList.remove('navdown');
    }
  }

  logout(){
    this.authservice.logout();
    setTimeout(() => {
      this.router.navigate(['/home'])
      window.location.reload();
    }, 200);
  }

}
