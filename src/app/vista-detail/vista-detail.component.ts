import { Vista } from './../vista';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-vista-detail',
  templateUrl: './vista-detail.component.html',
  styleUrls: ['./vista-detail.component.css']
})
export class VistaDetailComponent implements OnInit {
  @Input() vista: Vista;

  constructor() { }

  ngOnInit() {
  }

}
