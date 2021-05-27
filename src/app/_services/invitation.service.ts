import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import {invitation}from'../models/invitation'
@Injectable({
  providedIn: 'root'
})
export class InvitationService {
  private _url = environment.api_url;
  constructor(private _http: HttpClient) { }

  getInvitationByUser(id:any){
    return this._http.get<Array<invitation>>(this._url+'/invitation'+id);
  }
}
