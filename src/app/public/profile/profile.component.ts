import { Component, NgModule } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {MessageComponent} from "src/app/public/shared/message/message.component"
import {CreateEventComponent} from "src/app/association/create-event/create-event.component"
@Component({
    selector:'app-profile',
    templateUrl:'./profile.component.html',
    styleUrls:['./profile.component.scss']
})
export class ProfileComponent{
    constructor(private modalService: NgbModal) {}

    open() {
      const modalRef = this.modalService.open(MessageComponent);
    }

    openmessage(){
      const modalRef = this.modalService.open(CreateEventComponent);
    }
}