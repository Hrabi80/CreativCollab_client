import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AddSkillComponent } from '../add-skill/add-skill.component';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.scss']
})
export class SkillPanelComponent implements OnInit {
  ownProfile : boolean=false;
  constructor(private auth :AuthService,
              private modalService :  NgbModal) { }

  ngOnInit(): void {
  
  }

  openADD(){
    const modalRef = this.modalService.open(AddSkillComponent);
  }

}
