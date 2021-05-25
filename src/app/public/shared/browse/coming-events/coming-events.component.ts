import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { event } from 'src/app/models/event';
import {ReadMoreComponent} from 'src/app/public/shared/browse/coming-events/read-more/read-more.component';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-coming-events',
  templateUrl: './coming-events.component.html',
  styleUrls: ['./coming-events.component.scss']
})
export class ComingEventsComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private eventService : EventService,) { }
  data!:Array<event>;
  ngOnInit(): void {
    this.eventService.getAllEvents()
    .subscribe((res:Array<event>)=>{
      this.data=res;
    })
   }
  open() {
    const modalRef = this.modalService.open(ReadMoreComponent);
  }
}
