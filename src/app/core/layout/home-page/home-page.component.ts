import { Component, OnInit } from '@angular/core';
import { PetDTOResponse } from '../../models/PetDTOResponse.model';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MascotaService } from '../../services/mascota.service';
import { UtilService } from '../../services/util.service';
import { MisFavoritosService } from '../../services/mis-favoritos.service';
import { Subject, debounceTime } from 'rxjs';
import { MisMascotasService } from '../../services/mis-mascotas.service';

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


  constructor(
    private mascotaService: MascotaService,
    private utilService: UtilService,
    private misMascotasService: MisMascotasService,
    private misFavoritosService: MisFavoritosService) { }

  mascotas: PetDTOResponse[] = [];
  mascotasFiltradas: PetDTOResponse[] = [];
  private filtroSubject: Subject<any> = new Subject<any>();
  isLoading = false;

  filtrosSeleccionados = {
    perros: false, gatos: false,
    chico: false, mediano: false, grande: false,
    cachorro: false, adulto: false, mayor: false,
    macho: false, hembra: false
  };

  ngOnInit(): void {
    this.getAllPets();
    this.filtroSubject.pipe(debounceTime(1000)).subscribe(() => {
      this.actualizarInformacionFiltrada();
    });

    this.misMascotasService.refreshListObservable.subscribe(refresh => {
      if (refresh) {
        this.getAllPets();
      }
    });

    this.misFavoritosService.currentPets.subscribe((data: any) => {
      this.mascotas = data;
    });
  }

  handleUpdateFav(event: {id: number, isFavPet: any}) {
    this.mascotas = this.mascotas.map((item: any) => {
      if (item.id === event.id) {
        return { ...item, ...event.isFavPet };
      }
      return item;
    });
  }

  getAllPets(){
    this.isLoading = true;
    this.mascotaService.getAllMascotas().subscribe((response: any)=>{
      this.isLoading = false;
      this.mascotas = response;
      this.mascotasFiltradas = [...this.mascotas];
      this.misFavoritosService.setInitialStateFav(this.mascotas);
    },
    error =>{
      this.isLoading = false;
      this.utilService.openErrorModal('Error', 'No se pudieron obtener las mascotas', 'Continuar', 2000);
    });
  }

  onFilterChange() {
    this.filtroSubject.next(null);
  }

  actualizarInformacionFiltrada() {
    this.mascotasFiltradas = this.mascotas.filter((mascota: PetDTOResponse) => {
      const filtroTipo = 
        (!this.filtrosSeleccionados.perros && !this.filtrosSeleccionados.gatos) ||
        (this.filtrosSeleccionados.perros && mascota.pet.type === "DOG") ||
        (this.filtrosSeleccionados.gatos && mascota.pet.type === "CAT");
  
      const filtroTamano = 
        (!this.filtrosSeleccionados.chico && !this.filtrosSeleccionados.mediano && !this.filtrosSeleccionados.grande) || 
        (this.filtrosSeleccionados.chico && (mascota.pet.size === 'chico' || mascota.pet.size === 'chico-mediano')) || 
        (this.filtrosSeleccionados.mediano && (mascota.pet.size === 'chico-mediano' || mascota.pet.size === 'mediano' || mascota.pet.size === 'mediano-grande')) || 
        (this.filtrosSeleccionados.grande && (mascota.pet.size === 'mediano-grande' || mascota.pet.size === 'grande'));
  
      const filtroEdad = 
        (!this.filtrosSeleccionados.cachorro && !this.filtrosSeleccionados.adulto && !this.filtrosSeleccionados.mayor) ||
        (this.filtrosSeleccionados.cachorro && (mascota.pet.age && mascota.pet.age <= 2)) || 
        (this.filtrosSeleccionados.adulto && (mascota.pet.age && mascota.pet.age > 2 && mascota.pet.age <= 8)) || 
        (this.filtrosSeleccionados.mayor && (mascota.pet.age && mascota.pet.age > 8));
  
      const filtroGenero = 
        (!this.filtrosSeleccionados.macho && !this.filtrosSeleccionados.hembra) || 
        (this.filtrosSeleccionados.macho && mascota.pet.gender === 'Macho') || 
        (this.filtrosSeleccionados.hembra && mascota.pet.gender === 'Hembra');
  
      return filtroTipo && filtroTamano && filtroEdad && filtroGenero;
    });
  }
}
