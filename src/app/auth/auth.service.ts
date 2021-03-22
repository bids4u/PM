import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private http: HttpClient) {}
  isUserLoggedIn() {
    let token = sessionStorage.getItem('access_token');
    if (token === null) return false;
    return true;
  }
  getLoggedInToken() {
    let token = sessionStorage.getItem('access_token');
    if (token === null) return '';
    return token;
  }
}
