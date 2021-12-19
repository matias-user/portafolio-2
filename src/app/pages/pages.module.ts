import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ContactoComponent } from './contacto/contacto.component';


@NgModule({
  declarations: [
    ProyectoComponent,
    ContactoComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
