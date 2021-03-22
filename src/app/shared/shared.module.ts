import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MaterialModule } from './Material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {AuthGuardService} from './Services/auth-guard.service';
import { HighlightDirective } from './Attrubute/highlight.directive';
import { UnlessDirective } from './Structural/unless.directive';
import { appDatePickerDirective } from './directives/date-picker2/date-picker.directive';
import { InputDirective } from './directives/input.directive';

@NgModule({
  declarations: [PageNotFoundComponent, HighlightDirective, UnlessDirective],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    // appDatePickerDirective,
    // InputDirective
  ],
  providers: [],
  exports: [
    PageNotFoundComponent,
    MaterialModule,
    HighlightDirective,
    UnlessDirective,
    // appDatePickerDirective,
    // InputDirective,
  ],
})
export class SharedModule {}
