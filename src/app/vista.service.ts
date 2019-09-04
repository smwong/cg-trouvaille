import { VISTAS } from './vistas-list';
import { Injectable } from '@angular/core';
import { Vista } from './vista'

@Injectable({
  providedIn: 'root'
})
export class VistaService {

  getVistas(): Vista[] {
    return VISTAS;
  }

  constructor() { }
}
