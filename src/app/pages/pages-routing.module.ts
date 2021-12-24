import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { ProyectoComponent } from './proyecto/proyecto.component';

const routes: Routes = [
  { path:'inicio',component:InicioComponent },
  { path:'proyectos',component: ProyectoComponent  },
  { path:'contacto',component: ContactoComponent  },
  { path: '**', redirectTo: 'inicio' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
