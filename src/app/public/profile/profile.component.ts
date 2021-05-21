import { Component, NgModule } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {MessageComponent} from "src/app/public/shared/message/message.component"
import {CreateEventComponent} from "src/app/association/create-event/create-event.component"
import { user } from "src/app/models/user";
import { AuthService } from "src/app/_services/auth.service";
import { ActivatedRoute } from '@angular/router';
@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.scss']
})
export class ProfileComponent{
    constructor(private modalService: NgbModal,
                private authService: AuthService,
                private route: ActivatedRoute) {}
    user!:any;
    id:any;
    current_user_id:any;
    isOwn :boolean=false;
    ngOnInit(): void {
    this.id=this.route.snapshot.paramMap.get('id')!;
    this.current_user_id = this.authService.getUserIdFromLocalStorage();
    if(this.current_user_id == this.id)
    this.isOwn =true;
    this.authService.getUserById(this.id).subscribe((res:any)=>{
      this.user = res;
      console.log("role in profile === ",this.user);
    })
    
    }

    open() {
      const modalRef = this.modalService.open(MessageComponent);
    }

    openmessage(){
      const modalRef = this.modalService.open(CreateEventComponent);
    }


}