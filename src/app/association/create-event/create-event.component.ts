import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CustomerService } from 'src/app/_services/customer.service';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  createEventForm!: FormGroup
  constructor(
    public activeModal: NgbActiveModal,
    private service : EventService ,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createEventForm = this.fb.group({
      EventName: ['', Validators.required],
      EventDescription: ['', Validators.required],
      EventDate: ['', Validators.required]
    });
  }
  CreateEvent(){
    this.service.CreateEvent(this.createEventForm.value)
    .subscribe((res)=>{
      console.log("success",res);
    })

  }

}
