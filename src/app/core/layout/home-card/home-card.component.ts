import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullPetModalComponent } from '../full-pet-modal/full-pet-modal.component';
import { MisFavoritosService } from '../../services/mis-favoritos.service';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent {

  @Input() pet: any;
  currentSlideIndex = 0;

  constructor(private dialog: MatDialog, private misFavoritosService: MisFavoritosService, private utilService: UtilService) { }

  ngOnInit(): void {}

  previousSlide() {
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
    else {
      this.currentSlideIndex = this.pet.images.length - 1;
    }
  }

  nextSlide() {
    if (this.currentSlideIndex < this.pet.images.length - 1) {
      this.currentSlideIndex++;
    }
    else {
      this.currentSlideIndex = 0;
    }
  }

  openFullMascotaModal() {
    this.dialog.closeAll();
    this.dialog.open(FullPetModalComponent, {
      width: '36em',
      height: '60em',
      data: { pet: this.pet }
    })
  }

  toggleFav() {
    if (this.pet.pet.isFavPet) {
      this.misFavoritosService.deleteFavouritePet(this.pet.pet.id).subscribe({
        next: (resp) => {
            this.pet.pet.isFavPet = false;  
            this.misFavoritosService.refreshFavourites();
        },
        error: (error) => {
          this.utilService.notification('No se pudo eliminar la mascota de favoritos', 'warning', 2000);
        }
      });
    }
    else {
      this.misFavoritosService.addFavouritePet({petId: this.pet.pet.id}).subscribe({
        next: (resp) => {
          this.pet.pet.isFavPet = true;  
          this.misFavoritosService.refreshFavourites();
      },
      error: (error) => {
        this.utilService.notification('No se pudo agregar la mascota de favoritos', 'warning', 2000);
      }
      });
    }
  }
}
