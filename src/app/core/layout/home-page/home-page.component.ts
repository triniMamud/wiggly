import { Component, OnInit } from '@angular/core';
import { PetDTOResponse } from '../../models/PetDTOResponse.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MascotaService } from '../../services/mascota.service';
import { UtilService } from '../../services/util.service';

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


  constructor(private mascotaService: MascotaService, private utilService: UtilService) { }

  mascotas: PetDTOResponse[] = [];

  ngOnInit(): void {
    this.getAllPets();
  }

  getAllPets(){
    this.mascotaService.getAllMascotas().subscribe((response: any)=>{
      this.mascotas = response;
      this.mascotas.forEach((mascota: any) => {
        mascota.images.forEach((image: string, index: number) => {
          mascota.images[index] = "data:image;base64," + image;
        });
      });
    },
    error =>{
      this.utilService.notification('No se pudieron obtener las mascotas', 'warning',2000);
    });
  }
}
