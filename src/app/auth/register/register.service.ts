import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  constructor(private http: HttpClient) {
  }
userRegister(data){
  let url = environment.api+'auth';
    return this.http.post(url + "/signup", data);
}
}
