import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-ok',
  templateUrl: './modal-ok.component.html',
  template: 'passed in {{ data.email }}',
  styleUrls: ['./modal-ok.component.scss']
})
export class ModalOkComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: {email: string}) { }

}