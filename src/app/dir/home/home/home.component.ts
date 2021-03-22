import { Component, OnInit } from '@angular/core';
import { DirService } from '../../dir.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddPasswordComponent } from '../add-password/add-password.component';
import { map, tap } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data;
  search: string;
  display = true;
  displayPin = true;
  constructor(
    public dirService: DirService,
    public dialog: MatDialog
  ) {

  }

  ngOnInit() {
    this.onload();
  }
  onload() {
    this.dirService.password().subscribe(
      (data) => {
        this.data = data;
        // console.log(data)
      },
      (err) => {
        console.log(err);
      }
    );
  }
  onDelete(id) {
    let del = confirm('Are you sure you want to delete?');
    if (del) {
      console.log(id);
      this.dirService.delete(id).subscribe(
        (data) => {
          this.onload();
        },
        (err) => {}
      );
    }
  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.minWidth = '60vh';
    const dialogRef = this.dialog.open(AddPasswordComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      // console.log("Dialog output:", data);
      if (data) {
        this.dirService.postpassword(data).subscribe(
          (res) => {
            // console.log(res)
            this.onload();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
  }

  editDialog(i) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = this.data[i];
    // console.log(this.data[i]['_id'])
    const dialogRef = this.dialog.open(AddPasswordComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((data) => {
      console.log('Dialog output:', data);
      if (data) {
        this.dirService.putpassword(this.data[i]['_id'], data).subscribe(
          (res) => {
            // console.log(res)
            this.onload();
          },
          (err) => {
            console.log(err);
          }
        );
      }
    });
    console.log(this.data[i]);
  }
  setDisplay() {
    this.display = !this.display;
  }
  setDisplayPin() {
    this.displayPin = !this.displayPin;
  }
}
