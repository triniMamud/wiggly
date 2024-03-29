import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-adopciones-postulaciones',
  templateUrl: './card-adopciones-postulaciones.component.html',
  styleUrls: ['./card-adopciones-postulaciones.component.scss']
})
export class CardAdopcionesPostulacionesComponent {
  
  @Input() postulatedPet: any;
  currentSlideIndex = 0;

  constructor() {}

  ngOnInit(): void {    
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
    else {
      this.currentSlideIndex = this.postulatedPet.petImages.length - 1;
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.postulatedPet.petImages.length - 1) {
      this.currentSlideIndex++;
    }
    else {
      this.currentSlideIndex = 0;
    }
  }
}
