import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';  
import { AuthService } from 'src/app/_services/auth.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUp!: FormGroup;
  constructor(private _service :AuthService,
              private fb : FormBuilder,
              private router : Router) { }

  ngOnInit(): void {

    this.signUp = this.fb.group({  
      username: ['', Validators.required],
      mail: ['', Validators.required],  
      password: ['', Validators.required],
      role: ['']  
   });
  }

  sign(){
    console.log("sing...");
    this._service.register(this.signUp.value).subscribe((res)=>{
      console.log("registred?",res);
      swal.fire(
        `Thank you ${this.signUp.controls.username.value}`,
        'We are happy for being a member of the community !',
        'success'
      );
      setTimeout(() => {
        this.router.navigate(['/home'])
      }, 700);
    });
  }

}
