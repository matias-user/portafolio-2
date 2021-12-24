import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

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
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    
    
    indexAxis: 'y'
  };
  public barChartType: ChartType = 'bar';

  public barChartData: ChartData<'bar'> = {
    labels: [ '' ],
    datasets: [
      { data: [ 80 ], label: 'JavaScript' },
      { data: [ 65 ], label: 'Angular' },
      { data: [ 75 ], label: 'Bootstrap' },
      { data: [ 40 ], label: 'NodeJS y Express' },
      { data: [ 50 ], label: 'C#' },


    ]
  };


}
