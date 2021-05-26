import { Component, NgModule } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { MessageComponent } from "src/app/public/shared/message/message.component"
import { CreateEventComponent } from "src/app/association/create-event/create-event.component"
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { user } from "src/app/models/user";
import { AuthService } from "src/app/_services/auth.service";
import { ActivatedRoute } from '@angular/router';
import { EditDescriptionComponent } from "./description-section/edit-description/edit-description.component";
import { AvatarComponent } from "./avatar/avatar.component";
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
    console.log('locla storage tokkee ', localStorage.getItem('access_token'));
    this.current_user_id = this.authService.getUserIdFromLocalStorage();
    if (this.current_user_id == this.id)
      this.isOwn = true;
    this.authService.getUserById(this.id).subscribe((res: user) => {
      this.user = res;
      console.log("role in profileddd=== ", this.user);
    })


   
  }

  openCreateEvent(){
    const modalRef = this.modalService.open(CreateEventComponent);
  }
  openmessage() {
    const modalRef = this.modalService.open(MessageComponent);
  }
  openEditProfile() {
    const modalRef = this.modalService.open(EditProfileComponent);
  }

  openEditDescription() {
    const modalRef = this.modalService.open(EditDescriptionComponent);
  }
  openAvatar(){
    const modalRef = this.modalService.open(AvatarComponent);
  }
}