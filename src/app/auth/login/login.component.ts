import { Component, Injector,OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from './login.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthController } from '../auth.controller';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends AuthController implements OnInit {
  myLoginForm: FormGroup;
  error;
  constructor(public injector: Injector,
    public loginService: LoginService,
  ) {
    super(injector)

  }


  ngOnInit() {
      this.myLoginForm = new FormGroup({
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'password': new FormControl(null, [
          Validators.required,
          Validators.minLength(6),
        ]),
      });
  }
  onSubmit() {
    console.log(this.myLoginForm.value)
    this.loginService.userLogin(this.myLoginForm.value)
    .subscribe(
      data=>{
        console.log(data)
        sessionStorage.setItem('access_token',data['token']);
        sessionStorage.setItem('user',data['user']);
        this.router.navigate(['/dir'])
      },
      err=>{
        console.log(err)
        this.error = err['error']['message']
      }
    )
  }
}
