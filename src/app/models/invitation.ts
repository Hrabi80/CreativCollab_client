import { event } from "./event";
import { user } from "./user";

export interface invitation{
    _id:string,
    destinataire:user;
    expediteur:user;
    responseinvi:string;
    event:event;
}