import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/interfaces/proyecto.interface';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {
  
  badges: string[] = ['Angular','Bootstrap','Firebase','JavaScript','NodeJS','C#','CCS','Ionic'];
 
  proyectosArr: Proyecto[] = [
    { titulo:'Caja Chica App', badges: [ 
      this.badges[0],this.badges[2]], 
      imagen: '', repositorio:'', linkWeb:'' },
      
    { titulo:'Tienda web', badges: [ 
      this.badges[0],this.badges[2],this.badges[6] ], 
      imagen: '', repositorio:'', linkWeb:'' },
    
    { titulo:'Caja Chica App', badges: [ 
      this.badges[1],this.badges[3]], 
      imagen: '', repositorio:'', linkWeb:'' }
  
] 

  constructor() { }

  ngOnInit(): void {
  
  }



}
