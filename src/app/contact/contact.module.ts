import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ContactComponent } from './contact.component';


@NgModule({
  	declarations: [ContactComponent],
  	imports: [
    	CommonModule,
  		RouterModule.forChild([
  			{path: 'contact', component: ContactComponent}
  		])
  	]
})

export class ContactModule { }