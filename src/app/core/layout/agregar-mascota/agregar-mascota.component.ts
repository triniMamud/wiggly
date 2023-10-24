import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MisMascotasService } from '../../services/mis-mascotas.service';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-agregar-mascota',
  templateUrl: './agregar-mascota.component.html',
  styleUrls: ['./agregar-mascota.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AgregarMascotaComponent {

  currentStep = 1;
  answers: any = {}; // Almacena las respuestas del usuario
  enviando: Boolean = false;
  
  addPetForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    type: new FormControl(true, []),
    age: new FormControl(null, [Validators.required]),
    gender: new FormControl(true, []),
    size: new FormControl(null, [Validators.required]),
    location: new FormControl(null, [Validators.required]),
    isCastrated: new FormControl(false, []),
    vaccines: new FormControl(null, [Validators.required]),
    deparasited: new FormControl(null, [Validators.required]),
    medicalInfo: new FormControl(null, [Validators.required]),
    generalInfo: new FormControl(null, [Validators.required]),
    goodWithPets: new FormControl(null, [Validators.required]),
    goodWithChildren: new FormControl(null, [Validators.required]),
    beOnItsOwn: new FormControl(false, []),
    bathroomOutside: new FormControl(null, [Validators.required]),
    images: new FormControl([] as File[], []),
  })

  constructor(    
    private router: Router,
    private misMascotasService: MisMascotasService,
    private dialog: MatDialog,
    private utilService: UtilService,
    private route: ActivatedRoute) {}


  nextStep() {
    this.currentStep = 2;
  }

  async submitForm() {
    this.enviando = true;
    const pet = {
      name: this.addPetForm.get('name')?.value,
      type: this.addPetForm.get('type')?.value ? "DOG" : "CAT",
      age: this.addPetForm.get('age')?.value,
      gender: this.addPetForm.get('gender')?.value ? "Macho": "Hembra",
      size: this.addPetForm.get('size')?.value,
      location: this.addPetForm.get('location')?.value,
      isCastrated: this.addPetForm.get('isCastrated')?.value,
      vaccines: this.addPetForm.get('vaccines')?.value,
      deparasited: this.addPetForm.get('deparasited')?.value,
      medicalInfo: this.addPetForm.get('medicalInfo')?.value,
      generalInfo: this.addPetForm.get('generalInfo')?.value,
      goodWithPets: this.addPetForm.get('goodWithPets')?.value,
      goodWithChildren: this.addPetForm.get('goodWithChildren')?.value,
      beOnItsOwn: this.addPetForm.get('beOnItsOwn')?.value,
      bathroomOutside: this.addPetForm.get('bathroomOutside')?.value,
    };

    const files: File[] = this.addPetForm.get('images')?.value || [];
    const base64Images = await Promise.all(files.map(this.convertFileToBase64));
  
    const body = {
      pet: pet,
      images: base64Images
    };
    
    this.misMascotasService.agregarMiMascota(body)
      .subscribe((user: any) => {
          if (!user) {
            this.utilService.notification('No se pudo agregar la mascota', 'error');
            return;
          }
          this.utilService.notification('Se agregó a la mascota correctamente', 'success');
          this.dialog.closeAll();
        },
        (error: any) => {
          
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
    this.currentStep = 1; // Volver al primer paso desde el segundo
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



	onSelect(event: any) {
		console.log(event);
    this.addPetForm.get('images')?.value?.push(...event.addedFiles);
	}

	onRemove(event: any, index: number) {
		console.log(event);
		this.addPetForm.get('images')?.value?.splice(index, 1);
	}
  
  removeImage(index: number) {
    this.addPetForm.get('images')?.value?.splice(index, 1);
  }
  
  getImageUrl(image: File) {
    return URL.createObjectURL(image);
  }
  
}