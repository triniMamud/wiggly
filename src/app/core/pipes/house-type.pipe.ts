import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'houseType'
})
export class HouseTypePipe implements PipeTransform {

  transform(value: string): string {
    const translations: { [key: string]: string } = {
      'HOUSE': 'Casa',
      'DEPARTMENT': 'Departamento',
      'PH': 'PH',
      'OTHER': 'Otro'
    };

    return translations[value] || value;
  }

}
