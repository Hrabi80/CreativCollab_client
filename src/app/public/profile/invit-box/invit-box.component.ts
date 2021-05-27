import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListInvitationsComponent } from '../list-invitations/list-invitations.component';

@Component({
  selector: 'app-invit-box',
  templateUrl: './invit-box.component.html',
  styleUrls: ['./invit-box.component.scss']
})
export class InvitBoxComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  openListInvitations(){
    const modalRef = this.modalService.open(ListInvitationsComponent);
  }
}
