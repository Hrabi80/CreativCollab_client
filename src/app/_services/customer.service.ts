import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {message} from '../models/message';
import { contact } from '../models/contact';
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

   editAbout(data:string){
    return this._http.put(this._url+'/users/update',data)
   }

   editcontact(data:contact){
    return this._http.put(this._url+'/customer/editContact',data)
   }

   consultprofileAssociation(id:number){
    return this._http.get(this._url+'/customer/getAssociationById/'+id)
   }
}
