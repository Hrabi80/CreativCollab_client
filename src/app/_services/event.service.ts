import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { event } from '../models/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private _url = environment.api_url;
  constructor(private _http: HttpClient) { }
  
  CreateEvent(data: any) {
    console.log("hereee",data);
    return this._http.post(this._url + '/event', data);
  }

  getAllEvents(){
    return this._http.get<Array<event>>(this._url+'/event');
  }

  updateEvent(data:any,id:any){
    return this._http.put(this._url+'/update/'+id,data);
  }

  getEventByid(id:any){
    return this._http.get<event>(this._url+'/event/'+id);
  }
  EditEvent(data: Event){
    return this._http.put(this._url + '/event', data)
  }

  ViewEvent(){
    return this._http.get(this._url + '/event');
  }
}
