import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { first } from 'rxjs/operators';
import { user } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  message!: string;  
  returnUrl!: string;
  public error!: string; 
  role:string="";  
  
  constructor(private _service : AuthService,
              private fb : FormBuilder,  
              private router : Router,  
  ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({  
      userid: ['', Validators.required],  
      password: ['', Validators.required]  
   });
  }

  get f() { return this.loginForm.controls; }
  login() {  
  
    // stop here if form is invalid  
    if (this.loginForm.invalid) {  
       return;  
    }  
    else {  
       this._service.login2(this.f.userid.value,this.f.password.value);
      }  
    }  

    logins(){
      this._service.login2(this.f.userid.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (result) =>{
          console.log("myresult",result); 
          let mm=localStorage.getItem('access_token');
          let jwtData = mm!.split('.')[1];
          let decodedJwtJsonData = window.atob(jwtData);
          
          let decodedJwtData = JSON.parse(decodedJwtJsonData);

          let id = decodedJwtData._id;
          this._service.getUserById(id).subscribe((res:user)=>{
            console.log("role",res.role);
            console.log("res",res);
            this.role = res.role;
            localStorage.setItem('myuser', JSON.stringify(res));
          })

          console.log('jwtData: ' + jwtData);
          console.log('decodedJwtJsonData: ' + decodedJwtJsonData);
          console.log('decodedJwtData: ' + decodedJwtData);
          console.log('Is admin ??? : ' + id);


          setTimeout(() => {
            if(this.role == 'admin'){
             // this.router.navigate(['/home'])
             this.router.navigate(['/dashboard/admin']);
            }else{
              this.router.navigate(['/profile'])
            }
          }, 2500);
          //this.router.navigate(['/profile'])
        },
        err => this.error = 'Could not authenticate'
      )

    }

}
