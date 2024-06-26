import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tranducirStatus'
})
export class TranducirStatusPipe implements PipeTransform {

  transform(value: string): string {
    const translations: { [key: string]: string } = {
      'SENT': 'Enviada',
      'IN_REVISION': 'En revisión',
      'DECLAINED': 'Rechazada',
      'ACCEPTED': 'Aprobada'
    };

    return translations[value] || value;
  }

}
