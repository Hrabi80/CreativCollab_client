import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from "./clients/clients.component";
import { MessagesComponent } from "./messages/messages.component";
import { SidebarComponent } from "./sidebar/sidebar.component";

const routes: Routes = [
    
    { path: 'admin', component: SidebarComponent 
    /*
    children:[
        {path:'clients_list', component:ClientsComponent},
        {path:'messages_list', component: MessagesComponent}
    ] */
}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }