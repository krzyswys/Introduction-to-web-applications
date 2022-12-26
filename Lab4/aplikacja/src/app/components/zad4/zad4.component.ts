import { Component, ElementRef,
  OnInit,
  Renderer2,
  ViewChild, } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zad4',
  templateUrl: './zad4.component.html',
  styleUrls: ['./zad4.component.css']
})
export class Zad4Component implements OnInit {
  nameInput : string = "";
  moveInput : string = "";
  imieNazwisko :string = "";
  dlugoscImienia : number = 0;
  imieDuzymiLiterami : string = "";

  ngOnInit(): void { }

  showInfo(): void {
    this.imieNazwisko = this.nameInput;
    this.dlugoscImienia = this.nameInput.length;
    this.imieDuzymiLiterami = this.nameInput.toUpperCase();
  }
}