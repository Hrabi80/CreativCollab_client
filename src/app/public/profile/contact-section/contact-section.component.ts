import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddInvitationComponent } from '../add-invitation/add-invitation.component';
import { EditContactComponent } from '../edit-contact/edit-contact.component';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  @Input() isOwnContact!:boolean;
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    console.log("my variable is",this.isOwnContact);
  }
  openeditconatct(){
    const modalRef=this.modalService.open(EditContactComponent)
  }

  openinvitation(){
    const modalRef=this.modalService.open(AddInvitationComponent)
  }
}
