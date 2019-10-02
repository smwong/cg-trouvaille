import { VistaService } from './../vista.service';
import { Component, OnInit } from '@angular/core';
import { Vista } from '../vista';


@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {
  vistas: Vista[];

  constructor(private vistaService: VistaService) { }

  ngOnInit() {
    this.getVistas();
  }

  getVistas(): void {
    this.vistaService.getVistas()
    .subscribe(vistas => this.vistas = vistas);
  }

}
