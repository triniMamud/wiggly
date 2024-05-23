import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MisMascotasService } from '../../services/mis-mascotas.service';
import { MascotaService } from '../../services/mascota.service';
import { UtilService } from '../../services/util.service';
import { MisPostulacionesService } from '../../services/mis-postulaciones.service';
import { AuthenticationService } from '../../services/authentication.service';
import { UserFormComponent } from '../user-form/user-form.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-full-pet-modal',
  templateUrl: './full-pet-modal.component.html',
  styleUrls: ['./full-pet-modal.component.scss']
})
export class FullPetModalComponent {

  petData: any;
  petImages: any;
  currentSlideIndex = 0;
  petTypeGender: string = "";
  petBathroom: string = "";
  petGoodWithChildrenAndPets: string = "";
  isLoading: boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public pet: any,
    private mascotaService: MascotaService,
    private utilService: UtilService,
    private dialog: MatDialog,
    private misPostulacionesService: MisPostulacionesService,
    private authenticationService: AuthenticationService,
    private userService: UserService
  ){}

  ngOnInit(): void {
    this.petData = this.pet.pet.pet;
    this.petImages = this.pet.pet.images;
    this.formulateSentencePetTypeGender();
    this.formulateSentencePetBathroom();
    this.formulateSentencePetGoodWithChildrenAndPets();
  }


  previousSlide() {
    if (this.currentSlideIndex > 0) 
      this.currentSlideIndex--;
    else 
      this.currentSlideIndex = this.petImages.length - 1;
  }

  nextSlide() {
    if (this.currentSlideIndex < this.petImages.length - 1) 
      this.currentSlideIndex++;
    else 
      this.currentSlideIndex = 0;
    
  }

  formulateSentencePetTypeGender() {
    if (this.petData.gender === "Macho") {
      if (this.petData.type === "DOG") this.petTypeGender = "un perro macho";
      else if (this.petData.type === "CAT") this.petTypeGender = "un gato macho";
    } else if (this.petData.gender === "Hembra") {
      if (this.petData.type === "DOG") this.petTypeGender = "una perra hermbra";
      else if (this.petData.type === "CAT") this.petTypeGender = "una gata hembra";
    }
  }

  formulateSentencePetBathroom() {
    if (this.petData.bathroomOutside === "YES") this.petBathroom = "Sabe ir al baño afuera";
    else if (this.petData.bathroomOutside === "NO") this.petBathroom = "No sabe ir al baño afuera";
    else if (this.petData.bathroomOutside === "SOMETIMES") this.petBathroom = "A veces va al baño afuera, esta aprendiendo";
  }

  formulateSentencePetGoodWithChildrenAndPets() {
    if (this.petData.goodWithChildren === "Si") this.petGoodWithChildrenAndPets = "";
    else if (this.petData.goodWithChildren === "No") this.petGoodWithChildrenAndPets = "No ";
    else if (this.petData.goodWithChildren === "No se sabe") this.petGoodWithChildrenAndPets = "No se sabe si ";


    this.petGoodWithChildrenAndPets = this.petGoodWithChildrenAndPets + "se lleva bien con niños, y ";

    if (this.petData.goodWithPets !== "Si") this.petGoodWithChildrenAndPets = this.petGoodWithChildrenAndPets + this.petData.goodWithPets;

    this.petGoodWithChildrenAndPets = this.petGoodWithChildrenAndPets + "se lleva bien con otras mascotas.";
  }

  postularse() {    
    this.isLoading = true;
    this.userService.getIsFormAnswered().subscribe((resp: boolean) => {
      if(!resp) {
        this.isLoading = false;
        this.dialog.closeAll();
        this.utilService.openErrorModal('¡Necesitamos más información!', 'Antes de postularte, necesitamos que completes un formulario. Esto es por única vez, y será compartido con el refugio donde se encuentre la mascota que elegiste.', 'Continuar', undefined,
        () => {
          this.openUserForm();
        });
      } else {
        this.mascotaService.postulateToPet(this.petData.id).subscribe({
          next: (resp) => {
            this.isLoading = false;
            this.misPostulacionesService.refreshPostulaciones();
            this.dialog.closeAll();
            this.utilService.openSuccessModal('¡Felicidades!', 'La postulación fue éxitosa. Podrás seguir su estado desde la pestaña de Adopciones', 'Continuar');
          },
          error: (error) => {
            this.isLoading = false;
            this.utilService.openErrorModal('Error', error.error.message, 'Continuar');
          }
        });
      } 
    })
  }

  openUserForm() {
    this.dialog.closeAll();
    this.dialog.open(UserFormComponent, {
      width: '36em',
      height: '40em',
      data: { pet: this.pet }
    });
  }


}
