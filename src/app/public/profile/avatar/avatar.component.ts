import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { FormControl, FormBuilder,Validators,FormGroup} from '@angular/forms';
import swal from 'sweetalert2';
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  id!:any;
  form!:FormGroup;
  
  constructor(public activeModal: NgbActiveModal,
              public AuthService : AuthService,
              public customerService : CustomerService,
              public fb: FormBuilder,
              public route :ActivatedRoute) { }

  ngOnInit(): void {
    this.id!= this.AuthService.getUserIdFromLocalStorage();
    console.log("ddmy id ", this.AuthService.getUserIdFromLocalStorage());
    this.form=this.fb.group({
      avatar: ['',Validators.required]
    })
  }


  updateAvatar(){
    console.log(this.id);
     this.customerService.updateCustomer(this.form.value,this.AuthService.getUserIdFromLocalStorage())
     .subscribe((res)=>{
     console.log(res);
     swal.fire(
       'Updated ! ',
       'Your avatar is updated successfully ',
       'success'
     )
     setTimeout(() => {
       window.location.reload();
     }, 700);
    })
  }

}
