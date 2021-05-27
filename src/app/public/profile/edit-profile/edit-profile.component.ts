import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';
import swal from 'sweetalert2';
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
    private customerService : CustomerService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.EditProfileForm = this.fb.group({
      place: ['', Validators.required],
      domaine1:['', Validators.required],
      domaine2:['', Validators.required],
      domaine3:['', Validators.required],
      domaine4:['', Validators.required],
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
    this.customerService.updateCustomer(this.EditProfileForm.value,this.authService.getUserIdFromLocalStorage())
    .subscribe((res)=>{
      swal.fire('Done!',
      'updated successfully !',
      'success');

      setTimeout(() => {
        console.log(res);
      }, 700);
     })

  }
}
