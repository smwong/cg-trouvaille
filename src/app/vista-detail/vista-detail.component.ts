import { VistaService } from './../vista.service';
import { Vista } from './../vista';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-vista-detail',
  templateUrl: './vista-detail.component.html',
  styleUrls: ['./vista-detail.component.css']
})
export class VistaDetailComponent implements OnInit {
  
  vista: Vista;

  constructor(
    private route: ActivatedRoute,
    private vistaService: VistaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getVista();
  }

getVista(): void {
  const rank = +this.route.snapshot.paramMap.get('rank');
  this.vistaService.getVista(rank)
  .subscribe(vista => this.vista = vista);
}

goBack(): void {
  this.location.back();
}

}
