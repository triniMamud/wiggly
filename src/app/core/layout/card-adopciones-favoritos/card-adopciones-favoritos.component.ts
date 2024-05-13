import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MisFavoritosService } from '../../services/mis-favoritos.service';
import { MascotaService } from '../../services/mascota.service';

@Component({
  selector: 'app-card-adopciones-favoritos',
  templateUrl: './card-adopciones-favoritos.component.html',
  styleUrls: ['./card-adopciones-favoritos.component.scss']
})
export class CardAdopcionesFavoritosComponent {

  @Input() favPet: any;
  currentSlideIndex = 0;

  constructor(private misFavoritosService: MisFavoritosService,
    private mascotaService: MascotaService) {}

  ngOnInit(): void {    
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
    else {
      this.currentSlideIndex = this.favPet.images.length - 1;
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.favPet.images.length - 1) {
      this.currentSlideIndex++;
    }
    else {
      this.currentSlideIndex = 0;
    }
  }

  toggleFav() {
    this.misFavoritosService.deleteFavouritePet(this.favPet.pet.id).subscribe({
      next: (resp) => {
        this.mascotaService.updateFav(this.favPet.pet.id, false).subscribe((any) => {
          this.favPet.pet.isFavPet = false;  
          this.misFavoritosService.refreshFavourites();
          this.misFavoritosService.updateFavProperty(this.favPet.pet.id, false);
        });
      },
      error: (error) => {
      }
    });
  }
}
