import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilService } from '../../services/util.service';
import { RegistrationComponent } from '../registration/registration.component';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})

export class SignInModalComponent implements OnInit, AfterViewInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  currentUser: any = {};
  showPass = false;
  returnUrl: string;

  constructor(    
    private router: Router,
    private authenticationService: AuthenticationService,
    private utilService: UtilService,
    private dialog: MatDialog,
    private route: ActivatedRoute) {
      this.returnUrl = this.route.snapshot.params['returnUrl'] || '/';
      const tokenError = this.route.snapshot.params['error'] || null;
      const token = sessionStorage.getItem('token');
      if (token && Number(tokenError) === 400) {
        sessionStorage.clear();
      } else if (token) {
        this.router.navigate([this.returnUrl]);
      }
    }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      // this.focusElements.first.focus();
    });
  }

  reset() {
    this.form.controls.email.setValue('');
    this.form.controls.password.setValue('');
  }

  async singIn () {
    this.authenticationService.login(this.form.controls.email.value!, this.form.controls.password.value!)
      .pipe(first())
      .subscribe((currentUser: any) => {
          if (!currentUser) {
            this.utilService.notification('No se pudo obtener el usuario', 'error');
            return;
          }
        },
        (error: any) => {
          this.utilService.notification('Email o contraseña incorrectos', 'error')
        });
  }

  forgotPassword() {
    //HACER LOGICA
  }

  switchToRegister() {
    this.dialog.closeAll();
    this.dialog.open(RegistrationComponent, {
      width: '36em',
      height: '60em',
    })
  }

}
