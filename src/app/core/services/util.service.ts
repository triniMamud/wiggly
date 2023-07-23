import { Injectable } from '@angular/core';
//import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(/*private snackBar: MatSnackBar*/) { }

  notification(statusMessage: string, tipo?: string, duration?: number) {
    /*if (tipo) {
      let snackBar;
      if (tipo === 'success') {
        snackBar = SuccessComponent;
      } else if (tipo === 'warning') {
        snackBar = InformationComponent;
      } else if (tipo === 'error') {
        snackBar = ErrorComponent;
      }
      return this.snackBar.openFromComponent(snackBar, {
        duration: duration || 5000,
        data: statusMessage,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    } else {
      return this.snackBar.open(statusMessage, 'Cerrar', {
        duration: duration || 5000,
        verticalPosition: 'top',
        horizontalPosition: 'center',
      });
    }*/
    
    //VER QUE HACER
  }
}