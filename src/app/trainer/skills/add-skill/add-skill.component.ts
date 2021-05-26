import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator,FormControl, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from 'src/app/_services/auth.service';
import { CustomerService } from 'src/app/_services/customer.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-add-skill',
  templateUrl: './add-skill.component.html',
  styleUrls: ['./add-skill.component.scss']
})
export class AddSkillComponent implements OnInit {
  form!: FormGroup;
  
  constructor(public activeModal: NgbActiveModal,
              private service : CustomerService,
              private auth: AuthService,
              private fb : FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name:['',[Validators.required]],
      icon : ['',[Validators.required]]
    })
  }

}
