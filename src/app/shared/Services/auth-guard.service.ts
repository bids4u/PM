import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public router: Router) { }
  canActivate(): boolean {
    if (!this.isUserLoggedIn()) {
      this.router.navigate(['auth']);
      return false;
    }
    return true;
  }
  isUserLoggedIn() {
    let token = sessionStorage.getItem('access_token');
    if (token === null) return false;
    return true;
  }
}
