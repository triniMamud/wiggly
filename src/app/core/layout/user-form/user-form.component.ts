import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { MisMascotasService } from '../../services/mis-mascotas.service';
import { UtilService } from '../../services/util.service';
import { UserService } from '../../services/user.service';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  currentStep = 1;
  answers: any = {}; // Almacena las respuestas del usuario
  isLoading = false;
  user: any;
  
  userAnswers = new FormGroup({
    hasOtherPets: new FormControl(false, []),
    otherPetsInfo: new FormControl("", []),
    familyMembers: new FormControl(null, [Validators.required]),
    hasChildren: new FormControl(false, []),
    childrenInfo: new FormControl("", []),
    costsAwareness: new FormControl(true, []),
    jobSituation: new FormControl("", [Validators.required]),
    timeAlonePet: new FormControl(null, [Validators.required]),
    timesWalkPet: new FormControl(null, [Validators.required]),
    sleepingPlace: new FormControl("", [Validators.required]),
    canAffordTrainee: new FormControl(true, []),
    canAffordWalker: new FormControl(true, []),
    castrationCompromise: new FormControl(true, [Validators.required]),
    followUp: new FormControl(true, []),
    travelAsignee: new FormControl("", [Validators.required]),
    //transit
    transitPreferences: new FormControl(null, []),
    maxTimeTransit: new FormControl("", []),
    lastTransitsInfo: new FormControl("", []),
    //house info
    houseType: new FormControl("", [Validators.required]),
    openSpaces: new FormControl("", [Validators.required]),
    hasContentionNet: new FormControl(false, []),
    isOwner: new FormControl(false, []),
    allowsPets: new FormControl(false, []),
    houseImages: new FormControl([] as File[], [])
  })

  constructor(    
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog,
    private utilService: UtilService,
    private authenticationService: AuthenticationService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.user = this.authenticationService.getUser();
  }

  async submitForm() {
    this.isLoading = true;
    const files: File[] = this.userAnswers.get('houseImages')?.value || [];
    const base64Images = await Promise.all(files.map(this.convertFileToBase64));

    const request = {
      hasOtherPets: this.userAnswers.get('hasOtherPets')?.value,
      otherPetsInfo: this.userAnswers.get('otherPetsInfo')?.value,
      familyMembers: this.userAnswers.get('familyMembers')?.value, 
      hasChildren: this.userAnswers.get('hasChildren')?.value,
      childrenInfo: this.userAnswers.get('childrenInfo')?.value,
      costsAwareness: this.userAnswers.get('costsAwareness')?.value,
      jobSituation: this.userAnswers.get('jobSituation')?.value,
      timeAlonePet: this.userAnswers.get('timeAlonePet')?.value,
      timesWalkPet: this.userAnswers.get('timesWalkPet')?.value,
      sleepingPlace: this.userAnswers.get('sleepingPlace')?.value,
      canAffordTrainee: this.userAnswers.get('canAffordTrainee')?.value,
      canAffordWalker: this.userAnswers.get('canAffordWalker')?.value,
      castrationCompromise: this.userAnswers.get('castrationCompromise')?.value,
      followUp: this.userAnswers.get('followUp')?.value,
      travelAsignee: this.userAnswers.get('travelAsignee')?.value,
      transitPreferences: this.userAnswers.get('transitPreferences')?.value,
      maxTimeTransit: this.userAnswers.get('maxTimeTransit')?.value,
      lastTransitsInfo: this.userAnswers.get('lastTransitsInfo')?.value,
      houseTypeRequest : {
        type: this.userAnswers.get('houseType')?.value,
        openSpaces: this.userAnswers.get('openSpaces')?.value,
        hasContentionNet: this.userAnswers.get('hasContentionNet')?.value,
        isOwner: this.userAnswers.get('isOwner')?.value,
        allowsPets: this.userAnswers.get('allowsPets')?.value,
        houseImages: base64Images,
      }
    };

    this.userService.guardarRespuestas({request})
      .subscribe((resp: any) => {
        this.isLoading = false;
        if (!resp) {
          this.utilService.openErrorModal('Error', 'No se pudo guardar el formulario', 'Ok', 2000);
          return;
        }

        this.utilService.openSuccessModal('¡Listo!', 'Se guardó la información correctamente. ¡Recordá volver a postularte!', 'Continuar');
        this.dialog.closeAll();
        },
        (error: any) => {
          this.isLoading = false;
          this.utilService.openErrorModal('Error', 'No se pudo guardar el formulario', 'Ok', 2000);
        });
  }

  async convertFileToBase64(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  }

  previousStep() {
    if (this.currentStep === 2) this.currentStep = 1
    else if (this.currentStep === 3) this.currentStep = 2
  }

  nextStep() {
    if (this.currentStep === 1) this.currentStep = 2;
    else if (this.currentStep === 2) this.currentStep = 3;
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (const file of files) {
        this.userAnswers.get('houseImages')?.value?.push(file);
      }
    }
  }

  onFileDropped(event: any) {
    const files = event.item.data;
    if (files && files.length > 0) {
      for (const file of files) {
        this.userAnswers.get('houseImages')?.value?.push(file);
      }
    }
  }

	onSelect(event: any) {
    this.userAnswers.get('houseImages')?.value?.push(...event.addedFiles);
	}

	onRemove(event: any, index: number) {
		console.log(event);
		this.userAnswers.get('houseImages')?.value?.splice(index, 1);
	}
  
  removeImage(index: number) {
    this.userAnswers.get('houseImages')?.value?.splice(index, 1);
  }
  
  getImageUrl(image: File) {
    return URL.createObjectURL(image);
  }
}
