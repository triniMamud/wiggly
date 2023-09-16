import { Component } from '@angular/core';
import { MisMascotasService } from '../../services/mis-mascotas.service';
import { UtilService } from '../../services/util.service';
import { MatDialog } from '@angular/material/dialog';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { AgregarMascotaComponent } from '../agregar-mascota/agregar-mascota.component';

@Component({
  selector: 'app-mis-mascotas',
  templateUrl: './mis-mascotas.component.html',
  styleUrls: ['./mis-mascotas.component.scss']
})
export class MisMascotasComponent {

  misMascotas: any;

  constructor(
    private misMascotasService: MisMascotasService,
    private utilService: UtilService,
    private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    this.getAllMisMascotas();
  }

  getAllMisMascotas() {
    this.misMascotasService.getAllMisMascotas().subscribe((response: any)=>{
      this.misMascotas = response;
    },
    error =>{
      this.utilService.notification('No se pudo obtener las mascotas', 'warning',2000)
    });
  }

  addMiMascota() {
    this.dialog.open(AgregarMascotaComponent, {
      width: '36em',
      height: '60em',
    })
  }
  

}
