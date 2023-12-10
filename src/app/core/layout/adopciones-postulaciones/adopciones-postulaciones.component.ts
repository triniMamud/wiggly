import { Component } from '@angular/core';
import { MisPostulacionesService } from '../../services/mis-postulaciones.service';
import { MatDialog } from '@angular/material/dialog';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-adopciones-postulaciones',
  templateUrl: './adopciones-postulaciones.component.html',
  styleUrls: ['./adopciones-postulaciones.component.scss']
})
export class AdopcionesPostulacionesComponent {

  postulaciones: any;
  showPostulationDetail: boolean = false;
  postulationsDetails: any[] = [];

  constructor(
    private misPostulacionesService: MisPostulacionesService,
    private utilService: UtilService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllMisPostulaciones();
  }

  getAllMisPostulaciones() {
    this.misPostulacionesService.getMisPostulacionesByUser().subscribe((response: any)=>{
      this.postulaciones = response;
    },
    error =>{
      this.utilService.notification('No se pudo obtener las mascotas', 'warning',2000)
    });
  }

}
