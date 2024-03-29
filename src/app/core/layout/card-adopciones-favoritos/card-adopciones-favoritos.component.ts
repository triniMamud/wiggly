import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-adopciones-favoritos',
  templateUrl: './card-adopciones-favoritos.component.html',
  styleUrls: ['./card-adopciones-favoritos.component.scss']
})
export class CardAdopcionesFavoritosComponent {

  @Input() favPet: any;
  currentSlideIndex = 0;

  constructor() {}

  ngOnInit(): void {    
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
    else {
      this.currentSlideIndex = this.favPet.petImages.length - 1;
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.favPet.petImages.length - 1) {
      this.currentSlideIndex++;
    }
    else {
      this.currentSlideIndex = 0;
    }
  }
}
