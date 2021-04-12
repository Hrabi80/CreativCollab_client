import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ProfileModule} from './public/profile/profile.module';
import { JwtInterceptor } from './_helpers/jwt.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './public/landing-page/landing-page.component';
import { NavbarComponent } from './public/navbar/navbar.component';
import { HeroSectionComponent } from './public/landing-page/hero-section/hero-section.component';
import { ContactComponent } from './public/landing-page/contact/contact.component';
import { FeaturesComponent } from './public/landing-page/features/features.component';
import { AssociationSectionComponent } from './public/landing-page/association-section/association-section.component';
import { SpeakersSectionComponent } from './public/landing-page/speakers-section/speakers-section.component';
import { CompaniesSectionComponent } from './public/landing-page/companies-section/companies-section.component';
import { AboutSectionComponent } from './public/landing-page/about-section/about-section.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    NavbarComponent,
    HeroSectionComponent,
    ContactComponent,
    FeaturesComponent,
    AssociationSectionComponent,
    SpeakersSectionComponent,
    CompaniesSectionComponent,
    AboutSectionComponent
  ],
  imports: [
    BrowserModule,
    ProfileModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    JwtInterceptor ,{
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
