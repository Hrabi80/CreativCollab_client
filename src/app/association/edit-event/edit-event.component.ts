import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  EditEventForm!:FormGroup
  constructor(
    public activeModal: NgbActiveModal,
    private fb : FormBuilder,
    private service : EventService
    ) { }

  ngOnInit(): void {
    this.EditEventForm = this.fb.group({
      EventName: ['', Validators.required],
      EventDescription: ['', Validators.required],
      EventDate: ['', Validators.required]
    });
  }

  EditEvent(){
    this.service.EditEvent(this.EditEventForm.value)
    .subscribe((res)=>{
      console.log("my res",res);
    })

  }

}
