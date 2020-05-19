import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

import { HospitalModule } from '../hospital/hospital.module';

@NgModule({
  	declarations: [
  		HomeComponent
  	],
  	imports: [
    	CommonModule,
    	RouterModule,
  		HospitalModule
  	]
})

export class HomeModule { }
