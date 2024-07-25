import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private snackbar: MatSnackBar) { }

  showSnackbar(message: string, status: string, action: string = "close", duration: number = 3000) {
    this.snackbar.open(message, action, {
      duration: duration,
      horizontalPosition: 'end'
    })
  }
}
