import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.scss']
})
export class EditDescriptionComponent implements OnInit {

  descriptionForm!:FormGroup;
  data!:string;
  id:any;
  constructor(
    public activeModal: NgbActiveModal,
    private service : CustomerService,
    private auth: AuthService,
    private fb : FormBuilder  ) {}
  ngOnInit(): void {
    this.descriptionForm=this.fb.group({  
      about: ['', Validators.required]  
   });
   this.id=this.auth.getUserIdFromLocalStorage();
  }

  about(){
    this.service.editAbout(this.descriptionForm.value,this.id)
    .subscribe((res)=>{
      console.log("my res",res);
      swal.fire(
        'Done!',
        'Votre intro is updated successfully!',
        'success'
      )
      setTimeout(() => {
        window.location.reload();
      }, 500);
     
    })
  }
}
