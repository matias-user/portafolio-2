import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  urlImagen = '../../assets/img/perfil.png';

  constructor() { }

  ngOnInit(): void {
  }

}
