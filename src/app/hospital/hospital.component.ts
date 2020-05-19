// import { Component, OnChanges, Input, EventEmitter, Output} from '@angular/core';
import { Component, OnInit, OnChanges } from '@angular/core';
import { IHospital } from './hospital';
import { HospitalService } from './hospital.service';

@Component({
  	selector: 'app-hospital',
  	templateUrl: './hospital.component.html',
  	styleUrls: ['./hospital.component.css']
})

export class HospitalComponent implements OnInit {
	imageWidth: number = 100;
	hospitals: IHospital[];
	errorMessage: string;

  	constructor(private hospitalService: HospitalService) { }

  	performFilter(filterBy: string): IHospital[]{
  		filterBy = filterBy.toLocaleLowerCase();
  		return this.hospitals.filter((hospital: IHospital) => hospital.name.toLowerCase().indexOf(filterBy) !== -1 );
  	}

  	ngOnInit(): void {
  		this.hospitalService.getHospitals().subscribe({
  			next: hospitals => {
  				this.hospitals = hospitals
  			},
  			error: err => this.errorMessage = err
  		});
  	}

/*  ngOnChanges(): void{

  }
*/
}