import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { DirComponent } from './dir/dir.component';
import { DirRoutingModule } from './dir-routing';

@NgModule({
  declarations: [NavbarComponent, DirComponent],
  imports: [
    CommonModule,
    DirRoutingModule
  ],
})
export class DirModule { }
