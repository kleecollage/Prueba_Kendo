import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GridModule } from '@progress/kendo-angular-grid';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MultiSelectModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { MapModule } from '@progress/kendo-angular-map';
import { UploadsModule } from '@progress/kendo-angular-upload';
// import { CaptchaModule } from '@progress/kendo-angular-captcha'; <--- 404 ERROR


@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    GridModule,
    InputsModule,
    DateInputsModule,
    FormsModule,
    HttpClientModule,
    MultiSelectModule,
    PopupModule,
    CommonModule,
    MapModule,
    UploadsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
