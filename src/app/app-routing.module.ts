import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './authentifications/login/login.component';
import { SignUpComponent } from './authentifications/sign-up/sign-up.component';
import { AboutSectionComponent } from './public/landing-page/about-section/about-section.component';
import { BrowseComponent } from './public/landing-page/browse/browse.component';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { ProfileComponent } from './public/profile/profile.component';
import { NavbarComponent } from './public/shared/navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: 'profile', loadChildren: () => import('./public/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'home', component: LandingPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignUpComponent},
  { path: 'browse', component : BrowseComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
