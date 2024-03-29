import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vivienda-menu-postulation',
  templateUrl: './vivienda-menu-postulation.component.html',
  styleUrls: ['./vivienda-menu-postulation.component.scss']
})
export class ViviendaMenuPostulationComponent {

  @Input() postulation: any;
  currentSlideIndex = 0;

  constructor(){}

  ngOnInit(): void {
  }

  previousSlide() {
    if (this.currentSlideIndex > 0) 
      this.currentSlideIndex--;
    else 
      this.currentSlideIndex = this.postulation.house.houseImages.length - 1;
  }

  nextSlide() {
    if (this.currentSlideIndex < this.postulation.house.houseImages.length - 1) 
      this.currentSlideIndex++;
    else 
      this.currentSlideIndex = 0;
    
  }

}
