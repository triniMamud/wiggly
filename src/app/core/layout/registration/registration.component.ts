import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';

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

  constructor(private dialog: MatDialog) {}
    

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

  register() {

  }
}
