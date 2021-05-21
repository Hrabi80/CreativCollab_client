import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSkillComponent } from './skills/add-skill/add-skill.component';
import { UpdateSkillComponent } from './skills/update-skill/update-skill.component';
import { SkillPanelComponent } from './skills/skill-panel/skill-panel.component';



@NgModule({
  declarations: [AddSkillComponent, UpdateSkillComponent, SkillPanelComponent],
  imports: [
    CommonModule
  ],
  exports:[SkillPanelComponent]
})
export class TrainerModule { }
