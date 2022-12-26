import { Component } from '@angular/core';
import { AppServiceService } from '../app-service.service';
import { Tour } from '../tour-module/tour-module.component';


@Component({
  selector: 'app-basked-small',
  templateUrl: './basked-small.component.html',
  styleUrls: ['./basked-small.component.css']
})
export class BaskedSmallComponent  {

  btours: Tour[] = []
  itemNumber=this.btours.length;

  constructor(private appsevice: AppServiceService) {
  }
  ngOnInit() {

    this.appsevice.btours.subscribe(c => {
      this.btours = c;
    });
  }
  addT(Tour: Tour) {
    this.appsevice.addT(Tour);
  }
  removeT(Tour: Tour) {
    this.appsevice.removeT(Tour);
  }
  getPrice(){
    let p=0;
    for(let t of this.btours){
      p+=Number((t.amount*t.price).toFixed(2));
    }
    return Number((p).toFixed(2));
  }
  getLen(){
    let p=0;
    for(let t of this.btours){
      p+=t.amount;
    }
    return Number((p).toFixed(0));
  }

}
