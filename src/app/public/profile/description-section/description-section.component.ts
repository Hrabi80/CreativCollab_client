import { Component, OnInit,Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { EditDescriptionComponent } from './edit-description/edit-description.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss']
})
export class DescriptionSectionComponent implements OnInit {
  user!:user;
  id!:string;
  @Input() item!:boolean;
  constructor(private authServcie : AuthService,
            private modalService: NgbModal,
            private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.authServcie.getUserById(this.id)
    .subscribe((res:user)=>{
      this.user= res;
      console.log('this.user',this.user);
      console.log('this.user id :',this.user._id);
     })
     console.log("aaaaaaaaaaaaaaaa",this.item);
   // this.user=<user>JSON.parse(localStorage.getItem('myuser')!);
  }

  edit(){
   
  }

  openEditDescription() {
    const modalRef = this.modalService.open(EditDescriptionComponent);
  }

}
