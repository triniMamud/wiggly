import { Component, OnInit } from '@angular/core';
import { MisMascotasComponent } from '../mis-mascotas/mis-mascotas.component';
import { AdopcionesComponent } from '../adopciones/adopciones.component';
import { HomePageComponent } from '../home-page/home-page.component';
import { state, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-nav-home-page',
  templateUrl: './nav-home-page.component.html',
  styleUrls: ['./nav-home-page.component.scss'],
  animations: [
    /*trigger('dropdownAnimation', [
      state('open', style({ maxHeight: '300px', opacity: 1 })),
      state('closed', style({ maxHeight: '0', opacity: 0 })),
      transition('closed => open', animate('0.3s ease')),
      transition('open => closed', animate('0.3s ease'))
    ])*/
  ]
})
export class NavHomePageComponent implements OnInit {

  panelOpenState = false;
  products: any[] = []; // Your product data
  filteredProducts: any[] = [];
  selectedCategory: string = '';
  minPrice: number = 0;
  maxPrice: number = 0;
  mascota: any;
  edad: any;
  tamanio: any;
  sexo: any;

  tabs = [
    {title: 'Inicio', component: HomePageComponent},
    {title: 'Adopciones', component: AdopcionesComponent},
    {title: 'Mis mascotas', component: MisMascotasComponent}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  changeIndex(index: number){

  }

  isOpen = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

}
function style(arg0: { maxHeight: string; opacity: number; }): import("@angular/animations").AnimationStyleMetadata {
  throw new Error('Function not implemented.');
}

function animate(arg0: string): any {
  throw new Error('Function not implemented.');
}

