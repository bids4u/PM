import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';@Injectable({
  providedIn: 'root',
})
export class DirService {
  url: string
  constructor(private http: HttpClient,private router: Router,) {
    this.url =  environment.api+'password/';
  }
  password(){
    return this.http.get(this.url)
    .pipe(
      catchError(this.handleError)
    );
    // .map(res=>res.json())
    }
  putpassword(id:any,data: any) {
    return this.http.put(this.url+ id, data)
    .pipe(
      catchError(this.handleError)
    );
  }
  postpassword(data: any) {
    return this.http.post(this.url , data)
    .pipe(
      catchError(this.handleError)
    );
  }
  getPassword(id:any){
    return this.http.get(this.url+id)
    .pipe(
      catchError(this.handleError)
    );
  }
  delete(id:any){
    return this.http.delete(this.url+id)
    .pipe(
      catchError(this.handleError)
    );
  }
  userLogout(){
    sessionStorage.removeItem('access_token');
    this.router.navigate(['/'])
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error.message}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
