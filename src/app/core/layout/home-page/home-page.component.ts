import { Component, OnInit } from '@angular/core';
import { PetDTOResponse } from '../../models/PetDTOResponse.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  animations: [
    trigger('imageState', [
      state('active', style({ opacity: 1 })),
      state('inactive', style({ opacity: 0 })),
      transition('inactive => active', animate('500ms ease-in')),
      transition('active => inactive', animate('500ms ease-out'))
    ])
  ]
})
export class HomePageComponent implements OnInit {


  constructor() { }

  mascotas: PetDTOResponse[] = [];

  ngOnInit(): void {
    this.mascotas = [
      {
        pet: {
          id: 1,
          name: "aku",
          type: 0,
          age: 2,
          gender: "macho",
          size: "mediano",
          location: "nuñez",
          is_castrated: true,
          vaccines: "al dia",
          deparasited: "si",
          illnessesAndTreatments: "rodillita luxada",
          medicalInfo: "no",
          generalInfo: "es re bueno y cariñoso, y se pone nervioso facil",
          goodWithPets: "si, tiene un hermano perruno",
          goodWithChildren: "no se sabe",
          beOnItsOwn: true,
          bathroomOutside: 0
        },
        images: ["../../../../assets/images/aku.jpeg", "../../../../assets/images/kurama.jpg"]
      },
      {
        pet: {
          id: 1,
          name: "zeke",
          type: 0,
          age: 2,
          gender: "macho",
          size: "mediano",
          location: "nuñez",
          is_castrated: true,
          vaccines: "al dia",
          deparasited: "si",
          illnessesAndTreatments: "hipotiroidismo, sobrepeso",
          medicalInfo: "toma dos pastillitas a la mañana en ayunas",
          generalInfo: "terco y muertito de hambre, pero re re re mimoso",
          goodWithPets: "si, tiene un hermano perruno",
          goodWithChildren: "si",
          beOnItsOwn: true,
          bathroomOutside: 2
        },
        images: ["../../../../assets/images/zeke.jpeg", "../../../../assets/images/chihiro.jpeg"]
      }
    ]
  }
  currentSlideIndex = 0;

  previousSlide() {
    console.log("prev")
    if (this.currentSlideIndex > 0) {
      this.currentSlideIndex--;
    }
  }

  nextSlide(mascotaIndex: number) {
    console.log("next")

    if (this.currentSlideIndex < this.mascotas[mascotaIndex].images.length - 1) {
      this.currentSlideIndex++;
    }
  }
  /*
  function bytesToBlob(byteArray: Uint8Array, contentType: string): Blob {
  return new Blob([byteArray], { type: contentType });
}*/
}
