import { Component, OnInit, HostListener, Host } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
 
  constructor() { }

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
