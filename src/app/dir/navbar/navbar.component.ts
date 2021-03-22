import { Component, OnInit } from '@angular/core';
import { DirService } from '../dir.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private dirService:DirService) { }

  ngOnInit() {

  }
  logout(){
    this.dirService.userLogout();
  }
}
