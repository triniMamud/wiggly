import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { first } from 'rxjs';
import { AuthenticationService } from '../../services/authentication.service';
import { UtilService } from '../../services/util.service';
import { RegistrationComponent } from '../registration/registration.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';

@Component({
  selector: 'app-sign-in-modal',
  templateUrl: './sign-in-modal.component.html',
  styleUrls: ['./sign-in-modal.component.scss']
})

export class SignInModalComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  currentUser: any = {};
  showPass = false;
  returnUrl: string;
  isLoading = false;


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

  reset() {
    this.form.controls.email.setValue('');
    this.form.controls.password.setValue('');
  }

  async singIn () {
    this.isLoading = true;
    this.authenticationService.login(this.form.controls.email.value!, this.form.controls.password.value!)
      .subscribe((user: any) => {
        this.isLoading = false;
          if (!user) {
            this.utilService.openErrorModal('Error', 'The operation could not be completed!', 'Buu :(');
            return;
          }
          this.currentUser = user;
          this.dialog.closeAll();
          this.router.navigateByUrl('/home');
          /*const dialogRef = this.utilService.openSuccessModal('Success', 'The operation was successful!', 'Got it');
          const sub = dialogRef.afterClosed().subscribe(() => {
            this.dialog.closeAll();
            this.router.navigateByUrl('/home');
            sub.unsubscribe();
          });*/
        },
        (error: any) => {
          this.isLoading = false;
          this.utilService.openErrorModal('Error', 'The operation could not be completed!', 'Buu :(');
        });
  }

  openForgotPasswordModal() {
    this.dialog.closeAll();
    this.dialog.open(ForgotPasswordComponent, {
      width: '36em',
      height: '40em',
    })
  }

  switchToRegister() {
    this.dialog.closeAll();
    this.dialog.open(RegistrationComponent, {
      width: '36em',
      height: '60em',
    })
  }

}
