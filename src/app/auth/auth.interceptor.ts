import { Injectable, Injector } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
} from '@angular/common/http';
// import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
// import { AppService } from '../app.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    // public appService: AppService,
    public authService: AuthService,
    private spinner: NgxSpinnerService
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('auth loading',req.url.split('/')[3]);
    // this.appService.isLoading.next(true);
    this.spinner.show();
    if (this.authService.isUserLoggedIn()) {
      const authReq = req.clone({
        headers: new HttpHeaders({
          token: this.authService.getLoggedInToken(),
        }),
      });
      return next.handle(authReq).pipe(
        finalize(() => {
          this.spinner.hide();
          console.log('dir done loading');
          // this.appService.isLoading.next(false)
        })
      );
    } else {
      return next.handle(req).pipe(
        finalize(() => {
          console.log('auth done loading');
          // this.appService.isLoading.next(false)
          this.spinner.hide();
        })
      );
    }
  }
}
