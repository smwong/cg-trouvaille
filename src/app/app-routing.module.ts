import { VistaDetailComponent } from './vista-detail/vista-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VistasComponent } from './vistas/vistas.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:rank', component: VistaDetailComponent },
  { path: 'vistas', component: VistasComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }