import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-home-card',
  templateUrl: './home-card.component.html',
  styleUrls: ['./home-card.component.scss']
})
export class HomeCardComponent {

  @Input() pet: any;

  constructor() { }

  ngOnInit(): void {}


  currentSlideIndex = 0;

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
}
