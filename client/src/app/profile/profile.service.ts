import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import environemnt from '../../environments/environment';
import { ContactFormReq, ContactFormRes } from './profile-interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  API_URL = environemnt.API_URL;

  constructor(private http: HttpClient) {}

  sendEmail(data: ContactFormReq) {
    return this.http.post<ContactFormRes>(`${this.API_URL}send-email`, data);
  }
}
