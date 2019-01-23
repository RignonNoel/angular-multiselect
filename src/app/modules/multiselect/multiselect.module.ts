import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MultiselectComponent } from './multiselect.component';
import {OwlDateTimeModule, OwlNativeDateTimeModule} from "ng-pick-datetime";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  declarations: [
    MultiselectComponent,
  ],
  exports: [
    MultiselectComponent,
  ]
})
export class MultiselectModule { }
