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
    { 
      titulo:'Caja Chica App', 
      badges: [ this.badges[0],this.badges[2]], 
      imagen: '../../assets/img/caja-chica/1.webp', 
      repositorio:'https://github.com/matias-user/proyecto-innovacion', 
      linkWeb:'https://caja-chica-bc982.web.app/' 
    },
      
    { 
      titulo:'Tienda web', 
      badges: [ this.badges[0],this.badges[2],this.badges[6] ], 
      imagen: '../../assets/img/carrito/1.webp', 
      repositorio:'https://github.com/matias-user/proyecto-carrito', 
      linkWeb:'https://carrito-a51a4.web.app/' 
    },
    
    { 
      titulo:'Viajes Chile', 
      badges: [ this.badges[1],this.badges[3]], 
      imagen: '../../assets/img/viajes-chile/1.webp', 
      repositorio:'https://github.com/matias-user/viajes-chile', 
      linkWeb:'https://matias-user.github.io/viajes-chile/' 
    }
  
] 

  constructor() { }

  ngOnInit(): void {
  
  }



}
