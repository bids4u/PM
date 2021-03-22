import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from 'src/app/shared/Material/material.module';
import { AddPasswordComponent } from './add-password/add-password.component';
import { PasswordPipe } from './Pipes/password.pipe';
import { FilterPipe } from './Pipes/filter.pipe';



@NgModule({
  declarations: [HomeComponent, AddPasswordComponent, PasswordPipe, FilterPipe],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ],
  entryComponents:[AddPasswordComponent]
})
export class HomeModule { }
