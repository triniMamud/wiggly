import { Component, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UtilService } from '../../services/util.service';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';
import { UserService } from '../../services/user.service';
import { ModalOkComponent } from '../../modalUtils/modal-ok/modal-ok.component';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {

  email : string = '';
  touched: boolean = false;

  constructor(
    private dialog: MatDialog,
    private userService: UserService,
    private utilService: UtilService,
    private router: Router,
    private injector: Injector
  ) {}
    
  ngOnInit(): void {
  }

  forgotPassword() {
    this.userService.resetPassword(this.email!)
      .subscribe(() => {
        let dialogRef = this.dialog.open(ModalOkComponent, {
          data: { email: this.email },
        });
      },
      (error: any) => {
        this.utilService.notification('No se pudo enviar un mail de recuperacion', 'error')
      });
  }

  switchToSignIn() {
    this.dialog.closeAll();
    this.dialog.open(SignInModalComponent, {
      width: '36em',
      height: '60em',
    })
  }
}
