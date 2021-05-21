import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-skill-panel',
  templateUrl: './skill-panel.component.html',
  styleUrls: ['./skill-panel.component.scss']
})
export class SkillPanelComponent implements OnInit {
  ownProfile : boolean=false;
  constructor(private auth :AuthService) { }

  ngOnInit(): void {
  
  }

}
