import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'formatDate'
})

export class FormatDatePipe{
    monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];

	transform(value: string): string{
		let date = new Date(value);
		let day = date.getDay();
		let month = date.getMonth();
		let year = date.getFullYear();

		return this.monthNames[month]+', '+day+' '+year;
	}
}