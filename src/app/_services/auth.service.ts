import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Subject, Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { user } from '../models/user';



interface myData {
  success: boolean,
  message: string
}
@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public token!: string;
  private loggedInStatus = false;
  private _url = environment.api_url ;
  constructor(private _http: HttpClient) {
   }


   getUserById(id:any): Observable<any>{
      return this._http.get<user>(this._url+'/users/getUserById/'+id);
   }
   getAllUsers(){
    return this._http.get<Array<user>>(this._url+'/users/getUsers');
  }
  updateUser(){
    //return this._http.put(data:any)
  }
  register(data:any){
     return this._http.post(this._url+'/users/signup',data)
   }

   login2(username: string, password: string): Observable<boolean> {
    return this._http.post<{token: string}>(this._url+'/users/login', {username: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.token);
          localStorage.setItem('isconnected', 'true');
          console.log(localStorage);
          return true;
        })
      );
  }



   login(username: string, password: string): Observable<boolean> {
    return this._http.post<{token: string}>(this._url+'/login_check', {username: username, password: password})
      .pipe(
        map(result => {
          localStorage.setItem('currentUser', result.token);
          console.log(localStorage);
          return true;
        })
      );
  }
  

  getToken() {
    return localStorage.getItem('access_token');
  }
  getUserIdFromLocalStorage(){
    let mm=localStorage.getItem('access_token');
    if(localStorage.getItem('access_token') != null){
      let jwtData = mm!.split('.')[1];
      //decoder token
          let decodedJwtJsonData = window.atob(jwtData);
          
          let decodedJwtData = JSON.parse(decodedJwtJsonData);

          let id = decodedJwtData._id;
          return id;
    }else
    return null;        
  }


  public get loggedIn2(): boolean {
    return (localStorage.getItem('access_token') !== null);
  }

  public setUserInfo(user:any){
    localStorage.setItem('userInfo', JSON.stringify(user));
  }

  handleError(error: HttpErrorResponse) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      msg = error.error.message;
    } else {
      // server-side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(msg);
  }



  loggedIn() {
    console.log(localStorage.getItem('access_token'));
    if(localStorage.getItem('access_token') == null || localStorage.getItem('access_token') == undefined )
      return false;
    else return true;
  }

  // Verify if the use is superAdmin or not
  jwt:any;
  isAdmin(){
    this.jwt = localStorage.getItem('currentUser');
    let jwtData = this.jwt.split('.')[1]
    let decodedJwtJsonData = window.atob(jwtData)
    let decodedJwtData = JSON.parse(decodedJwtJsonData)
    let isAdmin = decodedJwtData.roles;
    const mm = isAdmin.toString();
    return this.myadminFn(mm);
  }
  myadminFn(role:string){
    if(role[5]== 'S')
    return true;
    else return false;
  }

  logout() :void {    
    localStorage.setItem('isconnected', 'false');   
    localStorage.removeItem('access_token');  
    localStorage.removeItem('myuser');   
    }  

}



