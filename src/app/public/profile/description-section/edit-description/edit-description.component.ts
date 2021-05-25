import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-edit-description',
  templateUrl: './edit-description.component.html',
  styleUrls: ['./edit-description.component.scss']
})
export class EditDescriptionComponent implements OnInit {

  descriptionForm!:FormGroup;
  data!:string;
  constructor(
    public activeModal: NgbActiveModal,
    private service : CustomerService,
    private fb : FormBuilder  ) {}
  ngOnInit(): void {
    this.descriptionForm=this.fb.group({  
      description: ['', Validators.required]  
   });
  }

  about(){
    this.service.sendmessage(this.descriptionForm.value)
    .subscribe((res)=>{
      console.log("my res",res);
    })
  }
}
