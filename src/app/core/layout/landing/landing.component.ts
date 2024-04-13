import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RegistrationComponent } from '../registration/registration.component';
import { SignInModalComponent } from '../sign-in-modal/sign-in-modal.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openSignInModal() {
    this.dialog.open(SignInModalComponent, {
      width: '30em',
      height: '40em'
    })
  }

  openRegistrationModal() {
    this.dialog.open(RegistrationComponent, {
      width: '30em',
      height: '40em'
    })
  }

}
