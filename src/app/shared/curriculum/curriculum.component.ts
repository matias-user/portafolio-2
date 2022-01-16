import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curriculum',
  templateUrl: './curriculum.component.html',
  styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

  tecnologias: any[] = [ 
    { linkImagen:'../../assets/img/lenguajes/bootstrap.svg', nombre:'Bootstrap' },
    { linkImagen:'../../assets/img/lenguajes/angular-icon.svg', nombre:'Angular' },
    { linkImagen:'../../assets/img/lenguajes/c-sharp.svg', nombre:'C#' },
    { linkImagen:'../../assets/img/lenguajes/express.svg', nombre:'Express' },
    { linkImagen:'../../assets/img/lenguajes/javascript.svg', nombre:'Javascript' },
    { linkImagen:'../../assets/img/lenguajes/mongodb.svg', nombre:'Mongodb' },
    { linkImagen:'../../assets/img/lenguajes/nodejs-icon.svg', nombre:'Nodejs' },

   ];
  urlImagenPerfil: string = '../../assets/img/perfil.webp';
  linkPortafolio: string = 'portafolio-4c8e2.web.app';
  linkGitHub: string = 'https://github.com/matias-user';
  constructor() { }

  ngOnInit(): void {
  }

}
