import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  user!:user;
  id!:string;
  constructor(public activeModal: NgbActiveModal,private authServcie : AuthService) { }

  ngOnInit(): void {
    this.id= this.authServcie.getUserIdFromLocalStorage();
    this.authServcie.getUserById(this.id)
    .subscribe((res:user)=>{
      this.user= res;
      console.log('this.user',this.user);
      console.log('this.user id :',this.user._id);
     })
  }

}
