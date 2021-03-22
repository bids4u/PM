import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  mySignupForm: FormGroup;

  constructor(private regis:RegisterService) {
    this.mySignupForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'username': new FormControl(null,[Validators.required]),
      'password': new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
   }

  ngOnInit() {
  }
onSubmit(){
  console.log(this.mySignupForm.value);
  this.regis.userRegister(this.mySignupForm.value)
  .subscribe(
    (res)=>console.log(res),
    (err)=> console.log(err)
  )
}
}
