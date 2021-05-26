import { user } from "./user";

export interface event{
    _id:string,
    name:string;
    date:string;
    introduction:string;
    inscriptionLink:string;
    link:string;
    lieu:string;
    owner:user
}