import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.scss']
})
export class AgregarMascotaComponent {

  currentStep = 1;
  answers: any = {}; // Almacena las respuestas del usuario
  
  addPetForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    type: new FormControl(1, [Validators.required]),
    age: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    size: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    isCastrated: new FormControl('', [Validators.required]),
    vaccines: new FormControl('', [Validators.required]),
    deparasited: new FormControl('', [Validators.required]),
    medicalInfo: new FormControl('', [Validators.required]),
    generalInfo: new FormControl('', [Validators.required]),
    goodWithPets: new FormControl('', [Validators.required]),
    goodWithChildren: new FormControl('', [Validators.required]),
    beOnItsOwn: new FormControl('', [Validators.required]),
    bathroomOutside: new FormControl('', [Validators.required]),
    images: new FormControl([] as File[], [Validators.required]),
  })


  nextStep() {
    // Valida las respuestas del primer paso antes de avanzar
    if (this.validateStep1()) {
      this.currentStep = 2;
    }
  }

  submitForm() {
    // Envía el formulario completo (respuestas de ambos pasos)
    // Puedes realizar una solicitud HTTP aquí o hacer lo que necesites
    console.log(this.answers);
  }

  previousStep() {
    this.currentStep = 1; // Volver al primer paso desde el segundo
  }

  private validateStep1(): boolean {
    return true;
    // Lógica de validación para el primer paso
    // Retorna true si las respuestas son válidas, de lo contrario, false
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      for (const file of files) {
        this.addPetForm.get('images')?.value?.push(file);
      }
    }
  }

  onFileDropped(event: any) {
    const files = event.item.data;
    if (files && files.length > 0) {
      for (const file of files) {
        this.addPetForm.get('images')?.value?.push(file);
      }
    }
  }
  
  removeImage(index: number) {
    this.addPetForm.get('images')?.value?.splice(index, 1);
  }
  
  getImageUrl(image: File) {
    return URL.createObjectURL(image);
  }
  
}