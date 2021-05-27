import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ViewEventComponent } from 'src/app/association/view-event/view-event.component';
import { event } from 'src/app/models/event';
import { AuthService } from 'src/app/_services/auth.service';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  myevents : Array<event>=[];
  constructor(private modalService: NgbModal,
              private route : ActivatedRoute,
              private Auth: AuthService,
              private eventService : EventService) { }

  ngOnInit(): void {
    this.route.snapshot.paramMap.get('id');
  //  this.
  }

  openEvent(){
    const modalRef = this.modalService.open(ViewEventComponent);
  }
  
}
