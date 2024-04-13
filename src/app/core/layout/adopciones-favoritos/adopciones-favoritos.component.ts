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
  isLoading: boolean = false;

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
    this.isLoading = true;
    this.misFavoritosService.getMisFavoritosByUser().subscribe((response: any)=>{
      this.isLoading = false;
      this.favoritos = response;
    },
    error =>{
      this.isLoading = false;
      this.utilService.openErrorModal('Error', 'No se pudo obtener las mascotas', 'OK');
    });
  }
}
