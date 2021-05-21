import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { message } from 'src/app/models/message';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  messageForm!:FormGroup
  data!:message
  constructor(
    public activeModal: NgbActiveModal,
    private authService : AuthService,
    private service : CustomerService,
    private fb : FormBuilder  ) {}
  ngOnInit(): void {
    this.messageForm=this.fb.group({  
      object: ['', Validators.required],  
      message: ['', Validators.required]  
   });
  }

  send(){
    this.service.sendmessage(this.messageForm.value)
    .subscribe((res)=>{
      console.log("my res",res);
    })
  }

}
