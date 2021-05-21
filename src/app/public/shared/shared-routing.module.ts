import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from 'src/app/authentifications/login/login.component';



const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  //{path: 'login', component:LoginComponent},
  { path: '', loadChildren: () => import('../../app.module').then(m => m.AppModule) },

  //{ path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
