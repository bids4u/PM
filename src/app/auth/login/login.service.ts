import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {
  }
  userLogin(data) {
    let url = environment.api+'auth';
    return this.http.post(url + "/login", data);
  }
  // getOptions() {
  //   let headers = {
  //     headers: new HttpHeaders({
  //       "Content-Type": "application/json",
  //     }),
  //   };
  //   return headers;
  // }
}
