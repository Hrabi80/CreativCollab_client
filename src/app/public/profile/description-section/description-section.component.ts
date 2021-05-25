import { Component, OnInit,Input } from '@angular/core';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss']
})
export class DescriptionSectionComponent implements OnInit {
  user!:user;
  id!:string;
  @Input() item!:boolean;
  constructor(private authServcie : AuthService) { }

  ngOnInit(): void {
    this.id= this.authServcie.getUserIdFromLocalStorage();
    this.authServcie.getUserById(this.id)
    .subscribe((res:user)=>{
      this.user= res;
      console.log('this.user',this.user);
      console.log('this.user id :',this.user._id);
     })
     console.log("aaaaaaaaaaaaaaaa",this.item);
   // this.user=<user>JSON.parse(localStorage.getItem('myuser')!);
  }

  edit(){
   
  }

}
