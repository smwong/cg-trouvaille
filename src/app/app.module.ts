import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VistasComponent } from './vistas/vistas.component';
import { FormsModule } from '@angular/forms';
import { VistaDetailComponent } from './vista-detail/vista-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    VistasComponent,
    VistaDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
