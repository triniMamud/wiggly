import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vivienda-menu-postulation',
  templateUrl: './vivienda-menu-postulation.component.html',
  styleUrls: ['./vivienda-menu-postulation.component.scss']
})
export class ViviendaMenuPostulationComponent {

  @Input() postulation: any;

  constructor(){}

  ngOnInit(): void {
  }

}
