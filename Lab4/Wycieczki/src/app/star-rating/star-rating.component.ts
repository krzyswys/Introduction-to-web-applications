import { Component, EventEmitter, Input, OnInit, Output  } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})


export class StarRatingComponent implements OnInit {

  constructor() { }
  @Output() ratingChanged = new EventEmitter<number>();

  @Input() tourStars = 0
  @Input() dishDislikes = 0

  alreadyVoted = false
  ngOnInit(): void {
  }
  getStarsFull(num: number){
    let tmp = []; 
    for(let i=0; i<this.tourStars; i++){
      tmp.push(0);
    }
    return tmp;
  
  }
  getStarsEmpty(num: number){
    let tmp = []; 
    for(let i=0; i<5-this.tourStars; i++){
      tmp.push(0);
    }
    return tmp;
  
  }
  starsChange(op: number){
    if(this.alreadyVoted)
    return
    this.tourStars=op+1
  }
  applyRating(){
    if(this.alreadyVoted)
      return
    this.ratingChanged.emit(this.tourStars)
    this.alreadyVoted = true
  }
}
