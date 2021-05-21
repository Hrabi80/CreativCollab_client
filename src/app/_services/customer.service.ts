import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {message} from '../models/message';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public token!: string;
  private loggedInStatus = false;
  private _url = environment.api_url ;
  constructor(private _http: HttpClient) {   
   }
   sendmessage(data:message){
    return this._http.post(this._url+'/customer/sendMessage',data)
   }

}
