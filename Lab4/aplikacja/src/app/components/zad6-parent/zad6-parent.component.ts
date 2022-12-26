import { Component,ViewChild, AfterViewInit, OnInit  } from '@angular/core';
@Component({
  selector: 'app-zad6-parent',
  templateUrl: './zad6-parent.component.html',
  styleUrls: ['./zad6-parent.component.css']
})
export class Zad6ParentComponent implements  OnInit{
  
  constructor() { }
  infoData=[];
  currentT:string="";
  currentD:string ="";
  
  ngOnInit(): void {
    fetch('./assets/zad6/zad6Data.json').then(res => res.json())
    .then(json => {
      this.infoData = json
    });
  }
   changeD(dsc: string){
    this.currentD = dsc
  }
  changeT(t: string){
    this.currentT =t
  }


}
