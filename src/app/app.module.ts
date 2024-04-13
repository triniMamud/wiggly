import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatStepperModule,} from '@angular/material/stepper';
import { MatTooltip, MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDropzoneModule } from 'ngx-dropzone';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavHomePageComponent } from './core/layout/nav-home-page/nav-home-page.component';
import { LandingComponent } from './core/layout/landing/landing.component';
import { SignInModalComponent } from './core/layout/sign-in-modal/sign-in-modal.component';
import { RegistrationComponent } from './core/layout/registration/registration.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './core/layout/forgot-password/forgot-password.component';
import { ModalOkComponent } from './core/modalUtils/modal-ok/modal-ok.component';
import { AdopcionesComponent } from './core/layout/adopciones/adopciones.component';
import { MisMascotasComponent } from './core/layout/mis-mascotas/mis-mascotas.component';
import { HomePageComponent } from './core/layout/home-page/home-page.component';
import { CommonModule } from '@angular/common';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeCardComponent } from './core/layout/home-card/home-card.component';
import { AgregarMascotaComponent } from './core/layout/agregar-mascota/agregar-mascota.component';
import { MisMascotasCardComponent } from './core/layout/mis-masctoas-card/mis-mascotas-card.component';
import { FullPetModalComponent } from './core/layout/full-pet-modal/full-pet-modal.component';
import { MisPostulacionesComponent } from './core/layout/mis-postulaciones-modal/mis-postulaciones.component';
import { GeneralMenuPostulationComponent } from './core/layout/general-menu-postulation/general-menu-postulation.component';
import { AdoptionMenuPostulationComponent } from './core/layout/adoption-menu-postulation/adoption-menu-postulation.component';
import { ViviendaMenuPostulationComponent } from './core/layout/vivienda-menu-postulation/vivienda-menu-postulation.component';
import { AdopcionesPostulacionesComponent } from './core/layout/adopciones-postulaciones/adopciones-postulaciones.component';
import { AdopcionesFavoritosComponent } from './core/layout/adopciones-favoritos/adopciones-favoritos.component';
import { CardAdopcionesPostulacionesComponent } from './core/layout/card-adopciones-postulaciones/card-adopciones-postulaciones.component';
import { TranducirStatusPipe } from './core/pipes/tranducir-status.pipe';
import { CardAdopcionesFavoritosComponent } from './core/layout/card-adopciones-favoritos/card-adopciones-favoritos.component';
import { AdoptionTypePipe } from './core/pipes/adoption-type.pipe';
import { HouseTypePipe } from './core/pipes/house-type.pipe';
import { MisPostulacionesCardComponent } from './core/layout/mis-postulaciones-card/mis-postulaciones-card.component';
import { ModalErrorComponent } from './core/modalUtils/modal-error/modal-error.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    SignInModalComponent,
    RegistrationComponent,
    ForgotPasswordComponent,
    ModalOkComponent,
    AdopcionesComponent,
    MisMascotasComponent,
    NavHomePageComponent,
    HomePageComponent,
    HomeCardComponent,
    AgregarMascotaComponent,
    MisMascotasCardComponent,
    FullPetModalComponent,
    MisPostulacionesComponent,
    GeneralMenuPostulationComponent,
    AdoptionMenuPostulationComponent,
    GeneralMenuPostulationComponent,
    AdoptionMenuPostulationComponent,
    ViviendaMenuPostulationComponent,
    AdopcionesPostulacionesComponent,
    AdopcionesFavoritosComponent,
    CardAdopcionesPostulacionesComponent,
    TranducirStatusPipe,
    CardAdopcionesFavoritosComponent,
    AdoptionTypePipe,
    HouseTypePipe,
    MisPostulacionesCardComponent,
    ModalErrorComponent
  ],
  imports: [
    CarouselModule,
    CommonModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatIconModule,
    HttpClientModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
		MatCardModule,
    MatTableModule,
    MatTabsModule,
    MatGridListModule,
    MatSelectModule,
    MatPaginatorModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatListModule,
    MatStepperModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatChipsModule,
    MatDatepickerModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
