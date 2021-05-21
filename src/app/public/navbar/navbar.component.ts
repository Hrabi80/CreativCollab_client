import { Component, OnInit, HostListener, Host } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isconnected:boolean=false;
  constructor(private authservice:AuthService) { }

  ngOnInit(): void {

    
    
  }
@HostListener('document:mousewheel',['$event'])
@HostListener('document:keydow',['$event'])
@HostListener('document:touchmove',['$event'])
ondocumentMousewheel(event:any){
  let element = document.querySelector('.header');
  if(document.body.scrollTop > 480 || document.documentElement.scrollTop > 480){
    console.log("heeeeey yosra i scrolll ....");
    element!.classList.add('navdown');
  }else{
    element!.classList.remove('navdown');
  }
}


}
