import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.scss']
})
export class TrainersComponent implements OnInit {

  constructor(private auth : AuthService) { }
  users!:Array<user>;
  ngOnInit(): void {
    this.auth.getAllUsers().subscribe((res:Array<user>)=>{
      this.users = res;
    }) }

}
