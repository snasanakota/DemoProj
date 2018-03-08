import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutUsPageComponent } from './about-us-page/about-us-page.component';
import { ContactUsPageComponent } from './contact-us-page/contact-us-page.component';
import { ProductsPageComponent } from './products-page/products-page.component';
import { EventsPageComponent } from './events-page/events-page.component';


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'landingpage',      component: LandingPageComponent },
  { path: 'products',      component: ProductsPageComponent },
  { path: 'aboutus',      component: AboutUsPageComponent },
  { path: 'contactus',      component: ContactUsPageComponent },
  { path: 'events',      component: EventsPageComponent },
 
];


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LandingPageComponent,
    AboutUsPageComponent,
    ContactUsPageComponent,
    ProductsPageComponent,
    EventsPageComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    RouterModule.forRoot(
      appRoutes
  // ,{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
