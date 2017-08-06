import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import { FooterComponent } from './components/footer/footer.component';

import { AgmCoreModule } from '@agm/core';
import {ValidateService} from "./services/validate.service";

import { FlashMessagesModule } from 'ngx-flash-messages';

const appRoutes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FlashMessagesModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCJhesmsIXz3eejhoNLnhJlrb6HGU7EnBU'
    }),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
