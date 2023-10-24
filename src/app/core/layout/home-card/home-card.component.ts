import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullPetModalComponent } from '../full-pet-modal/full-pet-modal.component';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent {

  @Input() pet: any;
  currentSlideIndex = 0;

  constructor(private dialog: MatDialog) { }

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
}
