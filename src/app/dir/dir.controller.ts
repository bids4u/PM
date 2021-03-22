import { Injector } from '@angular/core';
import { AppController } from '../../app/app.controller'

export class DirController extends AppController {
  constructor(public inj: Injector) {
    super(inj)
  }
}
