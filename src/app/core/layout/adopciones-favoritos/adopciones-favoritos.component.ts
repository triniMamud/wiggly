import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MisPostulacionesService } from '../../services/mis-postulaciones.service';
import { UtilService } from '../../services/util.service';
import { MisFavoritosService } from '../../services/mis-favoritos.service';

@Component({
  selector: 'app-adopciones-favoritos',
  templateUrl: './adopciones-favoritos.component.html',
  styleUrls: ['./adopciones-favoritos.component.scss']
})
export class AdopcionesFavoritosComponent {

  favoritos: any;
  showFavoritosDetail: boolean = false;
  favoritosDetails: any[] = [];

  constructor(
    private misFavoritosService: MisFavoritosService,
    private utilService: UtilService,
    private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getAllMisFavoritos();

    this.misFavoritosService.getRefreshFavouritesObservable().subscribe(() => {
      this.getAllMisFavoritos();
    });
  }

  getAllMisFavoritos() {
    this.misFavoritosService.getMisFavoritosByUser().subscribe((response: any)=>{
      this.favoritos = response;
    },
    error =>{
      this.utilService.notification('No se pudo obtener las mascotas', 'warning',2000)
    });
  }
}
