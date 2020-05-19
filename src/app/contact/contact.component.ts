import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  	// selector: 'app-contact',
  	templateUrl: './contact.component.html',
  	styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {

  	constructor() {
        $(".sticky").addClass("nav-sticky");
  	}

  	ngOnInit(): void {
  
  	}

}
