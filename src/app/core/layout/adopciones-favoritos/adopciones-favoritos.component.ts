import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MisPostulacionesService } from '../../services/mis-postulaciones.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-adopciones-favoritos',
  templateUrl: './adopciones-favoritos.component.html',
  styleUrls: ['./adopciones-favoritos.component.scss']
})
export class AdopcionesFavoritosComponent {

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
