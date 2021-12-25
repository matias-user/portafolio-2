import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css']
})
export class ProyectoComponent implements OnInit {

  arr: number[] = [ 1,2,3,4]

  badges: String[] = ['Angular','Bootstrap','JavaScript','NodeJS','C#','CCS'];
  constructor() { }

  ngOnInit(): void {
  
  }



}
