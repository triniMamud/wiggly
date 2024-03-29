import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adoptionType'
})
export class AdoptionTypePipe implements PipeTransform {

  transform(value: string): string {
    const translations: { [key: string]: string } = {
      'ADOPTION': 'Permanente',
      'TRANSIT': 'Transito',
      'BOTH': 'Indistinto'
    };

    return translations[value] || value;
  }

}
