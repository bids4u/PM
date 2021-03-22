import { Injector } from '@angular/core';
import { Router } from '@angular/router';

export class AppController {
  public router: Router;
  constructor(public inj: Injector) {
    this.router = this.inj.get(Router);
  }
}
