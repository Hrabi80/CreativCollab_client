import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authenticationService: AuthService
) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      
      console.log('can activate');

    if(this.authenticationService.loggedIn()) {
      return true;
     }else{
      this.router.navigate(['login']);

      return false;
    }

  }


  canActivate_SuperAdmin(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      
      console.log('can activate admin');

    if(this.authenticationService.loggedIn() && this.authenticationService.isAdmin()) {
      return true;
     }else{
      this.router.navigate(['']);

      return false;
    }

  }



}

