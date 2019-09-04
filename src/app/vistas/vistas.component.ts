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
  selectedVista: Vista;

  constructor(private vistaService: VistaService) { }

  getVistas(): void {
    this.vistas = this.vistaService.getVistas();
  }

  ngOnInit() {
    this.getVistas();
  }

  onSelect(vista: Vista): void {
    this.selectedVista = vista;
  }

}
