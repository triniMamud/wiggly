import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilService } from '../../services/util.service';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    age: new FormControl('', [Validators.required]),
    dni: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    transit: new FormControl(false, [Validators.required]),
    adoption: new FormControl(false, [Validators.required])
  })

  currentUser: any = {};
  showPass = false;
  isLoading = false;

  constructor(
    private dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private utilService: UtilService,
    private router: Router
  ) {}
    

  ngOnInit(): void {
  }

  switchToSignIn() {
    this.dialog.closeAll();
    this.dialog.open(SignInModalComponent, {
      width: '36em',
      height: '60em',
    })
  }

  async signUp() {
    this.isLoading = true;
    let adoptionType;
    if (this.registrationForm.get('transit')?.value && this.registrationForm.get('adoption')?.value) adoptionType = "BOTH";
    else if (this.registrationForm.get('transit')?.value) adoptionType = "TRANSIT";
    else if (this.registrationForm.get('adoption')?.value) adoptionType = "ADOPTION"

    const data = {
      name: this.registrationForm.get('name')?.value,
      lastName: this.registrationForm.get('lastName')?.value,
      email: this.registrationForm.get('email')?.value,
      password: this.registrationForm.get('password')?.value,
      age: this.registrationForm.get('age')?.value,
      dni: this.registrationForm.get('dni')?.value,
      phone: this.registrationForm.get('phone')?.value,
      location: this.registrationForm.get('location')?.value,
      adoptionType: adoptionType
    }

    this.authenticationService.register(data).subscribe((currentUser: any) => {
      this.isLoading = false;
      if (!currentUser) {
        this.utilService.openErrorModal('Error', 'No se pudo completar el registro', 'OK');
        return;
      }
      this.utilService.openSuccessModal('¡Muy bien!', 'El usuario se registró con éxito', 'Continuar', 1500);
      this.dialog.closeAll();
      this.router.navigateByUrl('/home');
    },
    (error: any) => {
      this.isLoading = false;
      this.utilService.openErrorModal('Error', 'No se pudo completar el registro', 'OK');
    });
  }
}
