import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  	// selector: 'app-home',
  	templateUrl: './home.component.html',
  	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  	constructor() { }

  	ngOnInit(): void {
	    $.backstretch([
            'assets/images/hospitals/washing_hands_1.jpg', 'assets/images/hospitals/disinfecting_1.jpg', 'assets/images/hospitals/patient_5.jpg', 'assets/images/hospitals/disinfecting_2.jpg', 'assets/images/hospitals/greeting_1.jpg',
            'assets/images/hospitals/test_5.jpg','assets/images/hospitals/patient_17.jpg', 'assets/images/hospitals/patient_18.jpg', 'assets/images/hospitals/personnel_3.jpg', 'assets/images/hospitals/personnel_4.jpg', 'assets/images/hospitals/personnel_5.jpg',
            'assets/images/hospitals/home_1.jpg', 'assets/images/hospitals/patient_8.jpg', 'assets/images/hospitals/home_3.jpg','assets/images/hospitals/greeting_2.jpg',  'assets/images/hospitals/home_2.jpg', 'assets/images/hospitals/patient_3.jpg',
            'assets/images/hospitals/test_1.jpg', 'assets/images/hospitals/patient_5.jpg', 'assets/images/hospitals/personnel_2.jpg', 'assets/images/hospitals/hospital_1.jpg', 'assets/images/hospitals/masks.jpg', 'assets/images/hospitals/patient_4.jpg',
            'assets/images/hospitals/test_2.jpg','assets/images/hospitals/personnel_6.jpg', 'assets/images/hospitals/patient_6.jpg', 'assets/images/hospitals/personnel_9.jpg', 'assets/images/hospitals/personnel_10.jpg','assets/images/hospitals/personnel_8.jpg', 'assets/images/hospitals/personnel_7.jpg', 'assets/images/hospitals/patient_14.jpg',
            'assets/images/hospitals/test_3.jpg','assets/images/hospitals/hospital_3.jpg', 'assets/images/hospitals/patient_12.jpg', 'assets/images/hospitals/hospital_2.jpg', 'assets/images/hospitals/hospital_5.jpg', 'assets/images/hospitals/hospital_8.jpg', 'assets/images/hospitals/patient_7.jpg', 'assets/images/hospitals/patient_10.jpg',
            'assets/images/hospitals/test_4.jpg','assets/images/hospitals/patient_9.jpg', 'assets/images/hospitals/patient_8.jpg', 'assets/images/hospitals/patient_13.jpg', 'assets/images/hospitals/patient_14.jpg', 'assets/images/hospitals/patient_15.jpg', 'assets/images/hospitals/patient_16.jpg',
            ], {
	        duration: 3000,
	        fade: 1000,
	    })
  	}
}
