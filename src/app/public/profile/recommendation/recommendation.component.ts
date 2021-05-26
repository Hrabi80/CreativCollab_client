import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  id:any;
  current_user_id!:any;
  user!:user;
  myinterest! : String;
  myavatar!: String;
  data: Array<user> =[];
  constructor(private authService : AuthService,
              private customerService:CustomerService,
              private route : ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
    this.current_user_id = this.authService.getUserIdFromLocalStorage();
    console.log("user issss", this.current_user_id);

    this.authService.getUserById(this.current_user_id)
      .subscribe((res: user) => {
        console.log("resss", res);
        console.log("user place is ", res.lieu);
        this.myinterest = res.domaine1;
        this.myavatar=res.avatar;
        console.log("myinterest",res.domaine1);
        console.log("myavatar",res.avatar);
      })
      this.authService.getAllUsers()
      .subscribe((res: Array<any>) => {
        var j = 0;
        console.log("resr",res);
        for (var i = 1; i < res.length; i++) {
          if (res[i].domaine1 == this.myinterest || res[i].domaine2 == this.myinterest || res[i].domaine3 == this.myinterest || res[i].domaine4 == this.myinterest) {
            this.data[j] = res[i];
            j++;
            console.log("my j== is ", j, "my data is===", this.data);
          }
        }

      });




  }

  //if(myinterest == data[i].domaine1 && myinterset == data[i].domaine2  --- 
}
