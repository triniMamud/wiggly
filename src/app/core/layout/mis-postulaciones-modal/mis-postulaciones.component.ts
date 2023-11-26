import { Component, Inject, Input } from '@angular/core';
import { GeneralMenuPostulationComponent } from '../general-menu-postulation/general-menu-postulation.component';
import { AdoptionMenuPostulationComponent } from '../adoption-menu-postulation/adoption-menu-postulation.component';
import { ViviendaMenuPostulationComponent } from '../vivienda-menu-postulation/vivienda-menu-postulation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-postulaciones',
  templateUrl: './mis-postulaciones.component.html',
  styleUrls: ['./mis-postulaciones.component.scss']
})
export class MisPostulacionesComponent {

  @Input() postulationsDetails: any[] = [];
  petPostulationsDetail: any[] = [];

  tabs = [
    {title: 'General', component: GeneralMenuPostulationComponent},
    {title: 'Adopcion', component: AdoptionMenuPostulationComponent},
    {title: 'Vivienda', component: ViviendaMenuPostulationComponent}
  ]

  constructor(private router: Router){}

  ngOnInit(): void {
    this.petPostulationsDetail = this.postulationsDetails[0];
  }

  changeIndex(index: number){}

  goBack() {
    this.router.navigate(['/mis-mascotas']);
  }

}
