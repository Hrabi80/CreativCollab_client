import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  EditProfileForm!:FormGroup;
  constructor(
    public activeModal: NgbActiveModal,
    private authService : AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.EditProfileForm = this.fb.group({
      username: ['', Validators.required],
      lieu: ['', Validators.required],
      mail: ['', Validators.required],
      link:['', Validators.required],
    });

    this.id= this.authService.getUserIdFromLocalStorage();
    this.authService.getUserById(this.id)
    .subscribe((res:user)=>{
      this.user= res;
      console.log('this.user',this.user);
      console.log('this.user id :',this.user._id);
     })
  }


  EditProfile(){
    // this.authService.updateUser(this.id).subscribe(()=>{

    // })
  }
}
