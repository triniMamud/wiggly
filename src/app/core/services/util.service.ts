import { Injectable } from '@angular/core';
import { ModalOkComponent } from '../modalUtils/modal-ok/modal-ok.component';
import { ModalErrorComponent } from '../modalUtils/modal-error/modal-error.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor(public dialog: MatDialog) { }

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

  public openSuccessModal(title: string, content: string, buttonText?: string, duration?: number) {
    const dialogRef = this.dialog.open(ModalOkComponent, {
      width: '300px',
      data: { title, content, buttonText }
    });
    
    if (duration) {
      setTimeout(() => {
        dialogRef.close();
      }, duration);
    }

    return dialogRef;
  }

  public openErrorModal(title: string, content: string, buttonText?: string, duration?: number, onClose?: () => void): MatDialogRef<any> {
    const dialogRef = this.dialog.open(ModalErrorComponent, {
      width: '300px',
      data: { title, content, buttonText }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (onClose) {
        onClose(); // Execute callback when modal closes
      }
    });

    if (duration) {
      setTimeout(() => {
        dialogRef.close();
      }, duration);
    }

    return dialogRef;
}
}