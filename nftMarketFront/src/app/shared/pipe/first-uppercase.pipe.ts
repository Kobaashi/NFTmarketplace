import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'firstUppercase',
  standalone: true
})
export class FirstUppercasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    return value
      .split(' ') // Розбиваємо рядок на масив слів
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Перетворюємо першу літеру кожного слова в uppercase
      .join(' '); // З'єднуємо слова назад в один рядок
  }

}
