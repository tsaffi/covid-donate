import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HospitalService } from './hospital.service';
import { IHospital } from './hospital';

// import $ from 'jquery';
declare var $: any;

@Component({
  	selector: 'app-hospital-detail',
  	templateUrl: './hospital-detail.component.html',
  	styleUrls: ['./hospital-detail.component.css']
})

export class HospitalDetailComponent implements OnInit {
	hospital: IHospital[];
	errorMessage: string;

  	constructor(private route: ActivatedRoute, private hospitalService: HospitalService, private router: Router) {

  		// $('.m-great').text('Hey, tsaffi, it works');
  	}

  	ngOnInit(): void {
  		let id = +this.route.snapshot.paramMap.get('id');
  		this.hospitalService.getHospitals().subscribe({
  			next: hospitals => {
  				this.hospital = hospitals.filter(hospital => hospital.id === id),
			    $.backstretch(this.hospital[0].images, {
			        duration: 3000,
			        fade: 1000,
			    })
  			},
  			error: err => this.errorMessage = err
  		})
  	}
}