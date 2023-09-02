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
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { MatChipsModule } from '@angular/material/chips';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    HomePageComponent
  ],
  imports: [
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
    MatDatepickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
