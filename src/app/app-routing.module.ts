import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { ProfileComponent } from './public/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: 'test', loadChildren: () => import('./public/profile/profile.module').then(m => m.ProfileModule) },
 /* {path:'profile', loadChildren: () => import('./public/profile/profile.module')
  .then(m => m.ProfileModule)}*/
  {path: 'home', component: LandingPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
