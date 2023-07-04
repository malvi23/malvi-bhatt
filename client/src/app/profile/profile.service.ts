import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environemnt } from '../../environments/environment';
import { ContactFormReq, ContactFormRes } from './profile-interface';
import { ErrorHandllingService } from '../commons/services/error-handlling.service';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  API_URL = environemnt.API_URL;

  constructor(
    private http: HttpClient,
    private _errorHandllingService: ErrorHandllingService
  ) {}

  sendEmail(data: ContactFormReq) {
    return this.http
      .post<ContactFormRes>(`${this.API_URL}send-email`, data)
      .pipe(
        catchError((err) => {
          return this._errorHandllingService.handleError(err);
        })
      );
  }
}
