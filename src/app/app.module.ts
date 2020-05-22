import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { HomeModule } from './home/home.module';
// import { HospitalModule } from './hospital/hospital.module';
import { ContactModule } from './contact/contact.module';
import { AboutUsModule } from './about-us/about-us.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './error/page-not-found.component';

@NgModule({
  	declarations: [
    	AppComponent,
    	PageNotFoundComponent
  	],
  	imports: [
    	BrowserModule,
      HttpClientModule,
    	HomeModule,
    	// HospitalModule,
        ContactModule,
      	AboutUsModule,
    	AppRoutingModule
  	],
  	providers: [],
  	bootstrap: [AppComponent]
})

export class AppModule { }