import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mis-postulaciones-card',
  templateUrl: './mis-postulaciones-card.component.html',
  styleUrls: ['./mis-postulaciones-card.component.scss']
})
export class MisPostulacionesCardComponent {

  @Input() myPostulation: any;

  constructor() { }

  ngOnInit(): void {
    
  }

  changeIndex(index: number){}


}
