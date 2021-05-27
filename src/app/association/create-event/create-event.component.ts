import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { event } from 'src/app/models/event';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';
import { EventService } from 'src/app/_services/event.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {
  createEventForm!: FormGroup;
  mydata!: event;
  username!: string;
  constructor(
    public activeModal: NgbActiveModal,
    private service : EventService ,
    private auth : AuthService,
    private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createEventForm = this.fb.group({
      name: ['', Validators.required],
      introduction: ['', Validators.required],
      date: ['', Validators.required],
      lieu:['', Validators.required],
      link:['', Validators.required],
      hashtag:['', Validators.required],
      hashtag2:['', Validators.required],
      hashtag3:['', Validators.required],
    });

    this.auth.getUserById(this.auth.getUserIdFromLocalStorage())
    .subscribe((res:user)=>{
      this.username = res.username;
    })
  }
  CreateEvent(){
   // console.log("my form is",this.createEventForm.value);
   /*
    const uploadData = new FormData();
    uploadData.append('name', this.createEventForm.get('name')!.value);
    uploadData.append('introduction', this.createEventForm.get('introduction')!.value);
    uploadData.append('date', this.createEventForm.get('date')!.value);
    uploadData.append('lieu', this.createEventForm.get('lieu')!.value);
    uploadData.append('link', this.createEventForm.get('link')!.value);
    uploadData.append('hashtag', this.createEventForm.get('hashtag')!.value);
    uploadData.append('hashtag2', this.createEventForm.get('hashtag2')!.value);
    uploadData.append('hashtag3', this.createEventForm.get('hashtag3')!.value);
    uploadData.append('owner1',this.username);
    console.log("my =data ",uploadData);*/
    this.service.CreateEvent(this.createEventForm.value)
   .subscribe((res:any)=>{
     console.log("success",res);
      swal.fire('done!',
      'new event is created!',
      'success'
      )
      setTimeout(() => {
        window.location.reload();
      }, 800);
    })

  }

}
