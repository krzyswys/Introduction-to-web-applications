import { Component, Input,  EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-zad6-child',
  templateUrl: './zad6.component.html',
  styleUrls: ['./zad6.component.css']
})
export class Zad6Component {
  @Output() getD = new EventEmitter<string>();
  @Output() getT = new EventEmitter<string>();
  callParent(): void {
    this.getD.next(this.description);
    this.getT.next(this.topic);
  }
  constructor (){}
  @Input() topic: any ;
  @Input() description : any;
}

