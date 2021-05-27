import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { EditContactComponent } from '../edit-contact/edit-contact.component';

@Component({
  selector: 'app-contact-section',
  templateUrl: './contact-section.component.html',
  styleUrls: ['./contact-section.component.scss']
})
export class ContactSectionComponent implements OnInit {
  @Input() isOwnContact!:boolean;
  id!:String;
  mycontact!:user;

  constructor(private modalService: NgbModal,
              private route : ActivatedRoute,
              private auth : AuthService) { }

  ngOnInit(): void {
    console.log("my variable is",this.isOwnContact);
    this.id= this.route.snapshot.paramMap.get('id')!;
    this.auth.getUserById(this.id)
    .subscribe((res:user)=>{
      this.mycontact= res;
    })

  }
  openeditconatct(){
    const modalRef=this.modalService.open(EditContactComponent)
  }

  
}
