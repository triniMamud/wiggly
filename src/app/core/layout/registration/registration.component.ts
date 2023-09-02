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
export class RegistrationComponent implements OnInit, AfterViewInit {

  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    surename: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    birthday: new FormControl('', [Validators.required])
  })

  currentUser: any = {};
  showPass = false;

  constructor(
    private dialog: MatDialog,
    private authenticationService: AuthenticationService,
    private utilService: UtilService,
    private router: Router
  ) {}
    

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // this.focusElements.first.focus();
    });
  }

  reset() {
    this.registrationForm.controls.name.setValue('');
    this.registrationForm.controls.surename.setValue('');
    this.registrationForm.controls.email.setValue('');
    this.registrationForm.controls.password.setValue('');
    this.registrationForm.controls.birthday.setValue('');
  }

  switchToSignIn() {
    this.dialog.closeAll();
    this.dialog.open(SignInModalComponent, {
      width: '36em',
      height: '60em',
    })
  }

  async signUp() {
    const data = {
      name: this.registrationForm.controls.name.value!,
      surename: this.registrationForm.controls.surename.value!,
      email: this.registrationForm.controls.email.value!,
      password: this.registrationForm.controls.password.value!,
      birthday: this.registrationForm.controls.birthday.value!
    }

    this.authenticationService.register(data)
    .subscribe((currentUser: any) => {
        
        if (!currentUser) {
          this.utilService.notification('No se pudo obtener el usuario', 'error');
          return;
        }
        this.dialog.closeAll();
        this.router.navigateByUrl('/home');
      },
      (error: any) => {
        this.utilService.notification('Email o contraseña incorrectos', 'error')
      });
  }
}
