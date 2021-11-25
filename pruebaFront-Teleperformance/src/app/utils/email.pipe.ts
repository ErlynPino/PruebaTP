import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 0) {
      return `Email: ${value}`;
    }
    else {
      value;
    }
  }

}
