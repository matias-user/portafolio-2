import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  informacion: any[] = [
    { nombre: 'gmail', ruta:'../../../assets/img/gmail.svg', link: 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=matias.abarca2018@gmail.com' },
    { nombre: 'linkedin', ruta:'../../../assets/img/linkedin.svg', link:'https://linkedin.com/in/matias-abarca-desarrollador' },
    { nombre: 'whatsapp', ruta:'../../../assets/img/whatsapp.svg', link: 'https://web.whatsapp.com/' },
  ];

  constructor() { }

  
}
