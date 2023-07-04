import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandllingService {

  constructor(private _snackBar: MatSnackBar) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  handleError(err:HttpErrorResponse){
    if(!err.error || !err.error){
      this.openSnackBar("Unknown error occured, please try again later!", 'Done')
      return throwError(() => new Error('UNKNOWN')) 
    }else{
      this.openSnackBar(err.error.message, 'Done')
      return throwError(() => new Error(err.error.message)) 
    }
  }
}
