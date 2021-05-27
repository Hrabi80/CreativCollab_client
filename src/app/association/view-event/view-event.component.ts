import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {
  ViewEventForm!:FormGroup
  constructor(
    public activeModal: NgbActiveModal,
    private fb:FormBuilder,
    private service : EventService
    ) { }

  ngOnInit(): void {
    this.ViewEventForm = this.fb.group({
      EventName: ['', Validators.required],
      EventDescription: ['', Validators.required],
      EventDate: ['', Validators.required]
    });
  }

  ViewEvent(){
    this.service.ViewEvent()
    .subscribe((res)=>{
      console.log("my res",res);
    })
  }

}
