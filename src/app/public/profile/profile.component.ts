import { Component, NgModule } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MessageComponent } from "src/app/public/shared/message/message.component"
import { CreateEventComponent } from "src/app/association/create-event/create-event.component"
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { user } from "src/app/models/user";
import { AuthService } from "src/app/_services/auth.service";
import { ActivatedRoute } from '@angular/router';
import { EditDescriptionComponent } from "./description-section/edit-description/edit-description.component";
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  constructor(private modalService: NgbModal,
    private authService: AuthService,
    private route: ActivatedRoute) { }
  user!: user;
  id: any;
  current_user_id: any;
  isOwn: boolean = false;

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.current_user_id = this.authService.getUserIdFromLocalStorage();
    if (this.current_user_id == this.id)
      this.isOwn = true;
    this.authService.getUserById(this.id).subscribe((res: user) => {
      this.user = res;
      console.log("role in profileddd=== ", this.user);
    })
  }
  open() {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.current_user_id = this.authService.getUserIdFromLocalStorage();
    if (this.current_user_id == this.id){
      this.isOwn = true;
      const modalRef = this.modalService.open(EditProfileComponent);
    }
    else{
      this.isOwn = false;
      const modalRef = this.modalService.open(MessageComponent);
    }
    
  }

  openmessage() {
    const modalRef = this.modalService.open(CreateEventComponent);
  }
  openeditprofile() {
    const modalRef = this.modalService.open(EditProfileComponent);
  }

  openEditDescription() {
    const modalRef = this.modalService.open(EditDescriptionComponent);
  }
}