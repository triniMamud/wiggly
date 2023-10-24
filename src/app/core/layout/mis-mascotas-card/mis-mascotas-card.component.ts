import { Component, Input } from '@angular/core';
import { MisMascotasService } from '../../services/mis-mascotas.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-mis-mascotas-card',
  templateUrl: './mis-mascotas-card.component.html',
  styleUrls: ['./mis-mascotas-card.component.scss']
})
export class MisMascotasCardComponent {

  @Input() myPet: any;
  postulations: any;
  currentSlideIndex = 0;
  postulationsCount: number = 0;

  constructor(private misMascotasService: MisMascotasService, private utilService: UtilService) { }

  ngOnInit(): void {
    this.myPet.images.forEach((image: string, index: number) => {
      this.myPet.images[index] = "data:image;base64," + image;
    });

    this.getPetPostulations();
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
      this.utilService.notification('No se pudo obtener las postulaciones de la mascota', 'warning',2000)
    });
  }

}
