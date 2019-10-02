import { VISTAS } from './vistas-list';
import { Injectable } from '@angular/core';
import { Vista } from './vista'
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VistaService {

  getVistas(): Observable<Vista[]> {
    return of (VISTAS);
  }

  getVista(rank: number): Observable<Vista> {
    return of(VISTAS.find(vista => vista.rank === rank));
  }

  constructor() { }
}
