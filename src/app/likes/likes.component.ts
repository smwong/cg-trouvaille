import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {
  @Input('likesCount') likesCount: number;
  @Input('isActive') isActive: boolean;

  onClick() {
    this.likesCount += (this.isActive) ? -1 : 1;
    this.isActive = this.isActive;
  }
}
