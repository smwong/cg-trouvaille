import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'likes-box',
  templateUrl: './likes.component.html',
  
})
export class LikesComponent {
  numberOfLikes: number = 0;

  likeButtonClick() {
    this.numberOfLikes++;
  }

  dislikeButtonClick() {
    this.numberOfLikes--;
  }

}
