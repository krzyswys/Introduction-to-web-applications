import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Zad4Component } from './components/zad4/zad4.component';
import { Zad5Component } from './components/zad5/zad5.component';
import { Zad6Component } from './components/zad6/zad6.component';
import { Zad6ParentComponent } from './components/zad6-parent/zad6-parent.component';



@NgModule({
  declarations: [
    AppComponent,
    Zad4Component,
    Zad5Component,
    Zad6Component,
    Zad6ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
