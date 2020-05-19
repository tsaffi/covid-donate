import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HospitalComponent } from './hospital.component';
import { HospitalDetailComponent } from './hospital-detail.component';


@NgModule({
  	imports: [
  		FormsModule,
    	CommonModule,
      	RouterModule.forChild([
          {path: 'hospitals', component: HospitalComponent},
	      	{path: 'hospitals/:id', component: HospitalDetailComponent}
      	])
  	],
  	declarations: [
  		HospitalComponent,
  		HospitalDetailComponent
  	],
  	exports: [
  		HospitalComponent,
  		FormsModule,
  		CommonModule
  	]
})

export class HospitalModule { }
