import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_NAME } from './core/constants/routes';
import { NavHomePageComponent } from './core/layout/nav-home-page/nav-home-page.component';
import { LandingComponent } from './core/layout/landing/landing.component';
import { MisPostulacionesComponent } from './core/layout/mis-postulaciones-modal/mis-postulaciones.component';
import { MisMascotasComponent } from './core/layout/mis-mascotas/mis-mascotas.component';

const routes: Routes = [
  {
    path: '',
		component: LandingComponent,
		pathMatch: 'full'
  },
  {
    path: ROUTES_NAME.HOME,
		component: NavHomePageComponent,
		pathMatch: 'full'
  },
  {
    path: ROUTES_NAME.POSTULATIONS,
		component: MisPostulacionesComponent,
		pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top', useHash: true
 })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
