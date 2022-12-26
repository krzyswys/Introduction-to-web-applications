import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  open = true;
  switchOpen(){
    this.open=!this.open;
  }
  getOpen(){
    return this.open
  }
  closeOpen(){
    this.open=false
  }
}
