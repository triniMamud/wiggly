import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tranducirStatus'
})
export class TranducirStatusPipe implements PipeTransform {

  transform(value: string): string {
    const translations: { [key: string]: string } = {
      'SENT': 'La postulación ha sido enviada',
      'IN_REVISION': 'El refugio esta revisando la postulación',
      'DECLAINED': 'La postulación fue rechazada',
      'ACCEPTED': 'La postulación fue aprobada'
    };

    return translations[value] || value;
  }

}
