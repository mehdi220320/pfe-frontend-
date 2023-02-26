import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from "@angular/router";
import { SignupComponent } from './signup/signup.component';
import { SinginComponent } from './singin/singin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtisteComponent } from './artiste/artiste.component';
import { PaymentComponent } from './payment/payment.component';
import { HomeComponent } from './home/home.component';
const  appRoutes : Routes =[
  {path:"signup",component:SignupComponent},
  {path:"home",component:HomeComponent},
  {path:"signin",component:SinginComponent},
  {path:"signinArtist",component:ArtisteComponent},
  {path:"payment",component:PaymentComponent}

];
// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SinginComponent,
    ArtisteComponent,
    PaymentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
