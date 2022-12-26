import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TourModuleComponent } from './tour-module/tour-module.component';
import { TourAddComponent } from './tour-add/tour-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { NavComponent } from './nav/nav.component';
import { BaskedSmallComponent } from './basked-small/basked-small.component';



@NgModule({
  declarations: [
    AppComponent,
    TourModuleComponent,
    TourAddComponent,
    StarRatingComponent,
    NavComponent,
    BaskedSmallComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
