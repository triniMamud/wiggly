import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MisMascotasService } from '../../services/mis-mascotas.service';
import { UtilService } from '../../services/util.service';
import { MatDialog } from '@angular/material/dialog';
import { MisPostulacionesComponent } from '../mis-postulaciones-modal/mis-postulaciones.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-mascotas-card',
  templateUrl: './mis-mascotas-card.component.html',
  styleUrls: ['./mis-mascotas-card.component.scss']
})
export class MisMascotasCardComponent {

  @Input() myPet: any;
  @Input() postulation: any;
  @Output() postulationPetClicked = new EventEmitter<any>();
  postulations: any;
  currentSlideIndex = 0;
  postulationsCount: number = 0;
  showMisPostulaciones: boolean = false;

  constructor(
    private misMascotasService: MisMascotasService,
    private utilService: UtilService,
    private dialog: MatDialog,
    private router: Router) { }

  ngOnInit(): void {
    this.getPetPostulations();
  }

  handlePostulationDetailClick() {
    this.postulationPetClicked.emit(this.postulations);
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
    else {
      this.currentSlideIndex = this.myPet.images.length - 1;
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.myPet.images.length - 1) {
      this.currentSlideIndex++;
    }
    else {
      this.currentSlideIndex = 0;
    }
  }

  getPetPostulations() {
    this.misMascotasService.getPetPostulation(this.myPet.pet.id).subscribe((response: any)=>{
      this.postulations = response;
      this.postulationsCount = response.length;
    },
    error =>{
      this.utilService.openErrorModal('Error', 'No se pudo obtener las postulaciones de la mascota', 'OK');
    });
  }
}
