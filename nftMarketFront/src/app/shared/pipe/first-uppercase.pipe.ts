import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUppercase',
  standalone: true
})
export class FirstUppercasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    return value
      .split(' ') 
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) 
      .join(' '); 
  }

}
