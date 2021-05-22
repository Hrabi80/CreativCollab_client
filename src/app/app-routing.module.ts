import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './authentifications/login/login.component';
import { SignUpComponent } from './authentifications/sign-up/sign-up.component';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { ProfileComponent } from './public/profile/profile.component';
import { AssociationsComponent } from './public/shared/browse/associations/associations.component';
import { CompaniesComponent } from './public/shared/browse/companies/companies.component';
import { TrainersComponent } from './public/shared/browse/trainers/trainers.component';
import { MessageComponent } from './public/shared/message/message.component';
import { TrainerComponent } from './trainer/trainer.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/home',
    pathMatch: 'full'
  },
  { path: 'profile', loadChildren: () => import('./public/profile/profile.module').then(m => m.ProfileModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
 // { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'home', component: LandingPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: SignUpComponent},
  { path: 'browse-association', component: AssociationsComponent},
  { path: 'browse-companies', component: CompaniesComponent},
  { path: 'browse-trainers', component: TrainersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
