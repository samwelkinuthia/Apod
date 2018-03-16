import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NasaComponent } from './nasa/nasa.component';
import {ApodService} from './services/apod.service';


@NgModule({
  declarations: [
    AppComponent,
    NasaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ApodService],
  bootstrap: [AppComponent]
})
export class AppModule { }
