import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.scss']
})
export class EditContactComponent implements OnInit {
  form!:FormGroup;
  constructor(public activeModal: NgbActiveModal,
              private fb:FormBuilder,
              private customer : CustomerService,
              private auth: AuthService) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      facebook:['',Validators.required],
      tel:['',Validators.required],
      twitter:['',Validators.required],
      linkedin:['',Validators.required]

    })
  }

  update(){
    console.log('dddff',this.form.value)
    this.customer.updateCustomer(this.form.value,this.auth.getUserIdFromLocalStorage())
    .subscribe((res)=>{
      console.log("updated",res);
      swal.fire('Done!',
      'updated successfuly',
      'success'
      )
      window.location.reload();
    })
  }

}
