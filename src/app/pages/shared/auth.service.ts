import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from './model/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { JwtHelperService } from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  helper = new JwtHelperService();

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(credentials: Auth) {
    return this.http.post('https://server-tienda.herokuapp.com/api/auth', credentials)
      .pipe(map(response => {
        let result = response;
        if (result && result['token']) {
          localStorage.setItem('token', result['token'])
          return true
        }
        return false
      }))
  }

  isLoggedIn() {
    let token = localStorage.getItem('token')
    if(!token)
      return false;

    let expirationDate = this.helper.getTokenExpirationDate(token)
    let isExpired = this.helper.isTokenExpired(token)

    return !isExpired;
  }

  logOut() {
    localStorage.removeItem('token')
    this.router.navigate(['/sign-in']);
  }

  get currentUser() {
    let token = localStorage.getItem('token')
    if(!token) return null;

    return this.helper.decodeToken(token)

  }
}
