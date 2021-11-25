import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namePipe'
})
export class NamePipePipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 0) {
      return `Nombre: ${value}`;
    }
    else {
      value;
    }
  }

}
