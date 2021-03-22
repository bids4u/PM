import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: "root",
})
export class AppService {
  // public isLoading:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  constructor() {
  }

}
