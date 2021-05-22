import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-associations',
  templateUrl: './associations.component.html',
  styleUrls: ['./associations.component.scss']
})
export class AssociationsComponent implements OnInit {

  constructor(
    private authService : AuthService,
    private customerService : CustomerService) { }
  data!:Array<user>;
  ngOnInit(): void {
    this.authService.getAllUsers()
    .subscribe((res:Array<user>)=>{
      this.data=res;
    })
   }

}
