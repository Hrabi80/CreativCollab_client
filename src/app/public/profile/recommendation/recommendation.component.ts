import { Component, OnInit } from '@angular/core';
import { user } from 'src/app/models/user';
import { AuthService } from 'src/app/_services/auth.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.scss']
})
export class RecommendationComponent implements OnInit {
  recommended:Array<user>=[];
  constructor(private authService : AuthService) { }
  myinterest:String="it";

  ngOnInit(): void {
    this.authService.getUserById(this.authService.getUserIdFromLocalStorage())
    .subscribe((res:user)=>{
      this.myinterest=res.domaine1;

      this.authService.getAllUsers()
    .subscribe((res2:Array<user>)=>{
      console.log("all",res2)
      var j=0;
       
      for (var i = 0; i < res2.length; i++) {
       if(res2[i].domaine1 == this.myinterest ||res2[i].domaine2 == this.myinterest || res2[i].domaine3 == this.myinterest || res2[i].domaine4 == this.myinterest ){
          this.recommended[j]=res2[i];
         j++;
         console.log("my j== is ",j,"my data is===",this.recommended);
         
        }        
        console.log("my j== is ",j,"my data is===",this.recommended);
     }
    })
    })
    
  }

}
