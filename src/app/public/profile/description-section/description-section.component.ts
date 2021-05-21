import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-description-section',
  templateUrl: './description-section.component.html',
  styleUrls: ['./description-section.component.scss']
})
export class DescriptionSectionComponent implements OnInit {
  user!:user;
  constructor() { }

  ngOnInit(): void {
    this.user=<user>JSON.parse(localStorage.getItem('myuser')!);
    console.log('this.user',this.user);
    console.log('this.user id :',this.user._id);

  }

}
