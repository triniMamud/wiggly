import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTES_NAME } from './core/constants/routes';
import { HomePageComponent } from './core/layout/home-page/home-page.component';
import { LandingComponent } from './core/layout/landing/landing.component';

const routes: Routes = [
  {
    path: '',
		component: LandingComponent,
		pathMatch: 'full'
  },
  {
    path: ROUTES_NAME.HOME,
		component: HomePageComponent,
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
