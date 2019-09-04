import { VISTAS } from './../vistas-list';
import { Component, OnInit } from '@angular/core';
import { Vista } from '../vista';

@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {

  vistas = VISTAS;
  selectedVista: Vista;

  constructor() { }

  ngOnInit() {
  }

  onSelect(vista: Vista): void {
    this.selectedVista = vista;
  }

}
