import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { event } from 'src/app/models/event';
import { ReadMoreComponent } from 'src/app/public/shared/browse/coming-events/read-more/read-more.component';
import { EventService } from 'src/app/_services/event.service';
import { AuthService } from "src/app/_services/auth.service";
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-coming-events',
  templateUrl: './coming-events.component.html',
  styleUrls: ['./coming-events.component.scss']
})
export class ComingEventsComponent implements OnInit {
  id: any;
  current_user_id: any;
  place:any;
  constructor(private modalService: NgbModal,
    private eventService: EventService,
    private route: ActivatedRoute,
    private authService: AuthService) { }
  data: Array<any>=[];
  myevents!: Array<event>
  ngOnInit(): void {

    this.id = this.route.snapshot.paramMap.get('id')!;
    this.current_user_id = this.authService.getUserIdFromLocalStorage();
    console.log("user issss",this.current_user_id);

   this.authService.getUserById(this.current_user_id)
   .subscribe((res:user)=>{
     console.log("resss",res);
     console.log("user place is ",res.lieu);
     this.place=res.lieu;
   })


    this.eventService.getAllEvents()
      .subscribe((res:Array<any>) => {
        var j=0;
       
         for (var i = 1; i < res.length; i++) {
          if(res[i].lieu == this.place ){
             this.data[j]=res[i];
            j++;
            console.log("my j== is ",j,"my data is===",this.data);
            
           }        
        }
        
      });
  }
  open() {
    const modalRef = this.modalService.open(ReadMoreComponent);
  }
}
