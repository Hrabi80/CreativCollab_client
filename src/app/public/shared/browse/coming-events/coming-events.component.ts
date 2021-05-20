import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {ReadMoreComponent} from 'src/app/public/shared/browse/coming-events/read-more/read-more.component';

@Component({
  selector: 'app-coming-events',
  templateUrl: './coming-events.component.html',
  styleUrls: ['./coming-events.component.scss']
})
export class ComingEventsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  open() {
    const modalRef = this.modalService.open(ReadMoreComponent);
  }
}
