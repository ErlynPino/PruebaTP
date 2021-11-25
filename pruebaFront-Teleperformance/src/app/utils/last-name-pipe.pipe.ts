import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastNamePipe'
})
export class LastNamePipePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 0) {
      return `Apellido: ${value}`;
    }
    else {
      value;
    }
  }

}
