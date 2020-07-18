import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private http: HttpClient) { }

  getMails() {
    return this.http.get('https://server-tienda.herokuapp.com/api/mails')
  }
}
