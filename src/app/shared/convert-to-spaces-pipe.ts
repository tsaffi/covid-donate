import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'convertToSpaces'
})

export class ConvertToSpacesPipe{

	transform(value: string, character: string): string{
		return value;
	}
}
