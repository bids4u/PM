import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { FormControl, FormGroup, Validators } from "@angular/forms";
myPasswordForm: FormGroup;

@Component({
  selector: "app-add-password",
  templateUrl: "./add-password.component.html",
  styleUrls: ["./add-password.component.scss"],
})
export class AddPasswordComponent implements OnInit {
  data;
  myPasswordForm: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<AddPasswordComponent>,
    @Inject(MAT_DIALOG_DATA) public datap: any
  ) {
    this.data = datap;
  }

  ngOnInit() {
    this.formIntialize();
    if (this.data) {
      this.myPasswordForm.setValue({
        url: this.data.url,
        email: this.data.email,
        username: this.data.username,
        password: this.data.password,
        pin: this.data.pin,
      });
    }
  }
  formIntialize() {
    this.myPasswordForm = new FormGroup({
      url: new FormControl(null,[Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      username: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      pin: new FormControl(null),
    });
  }
  save() {
    //console.log(data)
    this.dialogRef.close(this.myPasswordForm.value);
  }
  close() {
    this.dialogRef.close();
  }
}
