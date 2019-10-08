import { VistaService } from './../vista.service';
import { Vista } from './../vista';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  vistas: Vista[] = [];

  constructor(private vistaService: VistaService) { }

  ngOnInit() {
    this.getVistas();
  }

  getVistas(): void {
    this.vistaService.getVistas()
      .subscribe(vistas => this.vistas = vistas.slice(0,12));
  }

}
