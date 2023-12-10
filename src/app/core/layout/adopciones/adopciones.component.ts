import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdopcionesPostulacionesComponent } from '../adopciones-postulaciones/adopciones-postulaciones.component';
import { AdopcionesFavoritosComponent } from '../adopciones-favoritos/adopciones-favoritos.component';

@Component({
  selector: 'app-adopciones',
  templateUrl: './adopciones.component.html',
  styleUrls: ['./adopciones.component.scss']
})
export class AdopcionesComponent {

  tabs = [
    {title: 'Mis postulaciones', component: AdopcionesPostulacionesComponent},
    {title: 'Mis favoritos', component: AdopcionesFavoritosComponent},
  ]

  constructor(private router: Router){}

  ngOnInit(): void {
  }

  changeIndex(index: number){}

}
