import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-invitations',
  templateUrl: './list-invitations.component.html',
  styleUrls: ['./list-invitations.component.scss']
})
export class ListInvitationsComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  tinyAlert(){
    Swal.fire('This invitation was refused');
  }
  
  successNotification(){
    Swal.fire('Hi', 'We have been informed!', 'success')
  }

  alertConfirmation(){
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, go ahead.',
      cancelButtonText: 'No, let me think'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Removed!',
          'Product removed successfully.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Product still in our database.)',
          'error'
        )
      }
    })
  }  
}
