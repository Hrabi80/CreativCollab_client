import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { event } from 'src/app/models/event';
import { EventService } from 'src/app/_services/event.service';

@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.component.html',
  styleUrls: ['./event-details.component.scss']
})
export class EventDetailsComponent implements OnInit {
  id!:string;
  data!:event;
  constructor(private route: ActivatedRoute,
    private eventService : EventService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;

    this.eventService.getEventByid(this.id)
    .subscribe((res:event)=>{
      this.data=res;
    })
  }
}
